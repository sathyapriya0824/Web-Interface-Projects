function SubjectList(props){

    return(

        <div className="subjects">

            <h2>Subjects</h2>

            <ul>

                {
                    props.subjects.map((sub,index)=>

                    <li key={index}>{sub}</li>

                    )
                }

            </ul>

            <h3>
                Current Semester : {props.semester}
            </h3>

            <h3>
                Current Year : {props.currentYear}
            </h3>

            <h3>
                Total Subjects : {props.subjects.length}
            </h3>

        </div>

    );
}

export default SubjectList;