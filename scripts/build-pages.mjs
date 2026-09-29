import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const siteDir = path.join(rootDir, 'site');
const projectDirs = [
  path.join(rootDir, 'UNIT-1'),
  path.join(rootDir, 'UNIT-2'),
  path.join(rootDir, 'UNIT-3'),
  path.join(rootDir, 'UNIT-4'),
  path.join(rootDir, 'UNIT-5')
];

const knownStaticEntries = [
  { source: path.join(rootDir, 'UNIT-1', 'Counter App.html'), target: path.join('UNIT-1', 'Counter App.html') },
  { source: path.join(rootDir, 'UNIT-1', 'Student profile card.html'), target: path.join('UNIT-1', 'Student profile card.html') },
];

function ensureDirectory(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function runCommand(command, args, cwd) {
  const result = spawnSync(command, args, {
    cwd,
    stdio: 'inherit',
    shell: true,
  });

  if (result.status !== 0) {
    throw new Error(`Command failed: ${command} ${args.join(' ')} in ${cwd}`);
  }
}

function copyDirectory(source, target) {
  ensureDirectory(path.dirname(target));
  fs.cpSync(source, target, { recursive: true, force: true });
}

function copyFile(source, target) {
  ensureDirectory(path.dirname(target));
  fs.copyFileSync(source, target);
}

function buildProject(projectDir) {
  const packageJsonPath = path.join(projectDir, 'package.json');
  if (!fs.existsSync(packageJsonPath)) {
    return;
  }

  runCommand('npm', ['ci', '--silent'], projectDir);
  runCommand('npm', ['run', 'build', '--', '--emptyOutDir'], projectDir);

  const outputFolder = fs.existsSync(path.join(projectDir, 'dist')) ? 'dist' : 'build';
  const sourceFolder = path.join(projectDir, outputFolder);
  if (!fs.existsSync(sourceFolder)) {
    throw new Error(`Build output missing in ${projectDir}: ${sourceFolder}`);
  }

  const targetFolder = path.join(siteDir, path.relative(rootDir, projectDir));
  copyDirectory(sourceFolder, targetFolder);
}

function buildStaticProject(source, target) {
  copyFile(source, path.join(siteDir, target));
}

function buildRootPortfolio() {
  fs.rmSync(siteDir, { recursive: true, force: true });
  ensureDirectory(siteDir);

  copyFile(path.join(rootDir, 'index.html'), path.join(siteDir, 'index.html'));
  copyFile(path.join(rootDir, 'styles.css'), path.join(siteDir, 'styles.css'));

  for (const staticEntry of knownStaticEntries) {
    buildStaticProject(staticEntry.source, staticEntry.target);
  }

  for (const projectDir of projectDirs) {
    if (!fs.existsSync(projectDir)) continue;

    const children = fs.readdirSync(projectDir, { withFileTypes: true })
      .filter((entry) => entry.isDirectory() || entry.isSymbolicLink())
      .map((entry) => path.join(projectDir, entry.name));

    for (const child of children) {
      if (fs.existsSync(path.join(child, 'package.json'))) {
        buildProject(child);
      }
    }
  }

  fs.writeFileSync(path.join(siteDir, '.nojekyll'), '');
}

buildRootPortfolio();
console.log(`Static portfolio generated at ${siteDir}`);
