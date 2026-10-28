import * as studentModel from '../models/studentModel.js';

export const fetchAllStudent = async () =>{
  const student = await studentModel.fetch();
  return student;
}

// insert
export const createStudent = async (student) => {
  const studentId = await studentModel.insert(student);
  return studentId;
}

// update
export const update = async (student) => {
    const [result] = await pool.query (
        "UPDATE student SET name= ?, srcode= ?, program= ? WHERE id= ? ",
        [student.name, student.srcode, student.program, student.id]
    );
    return result.affectedRows;
}

// delete
export const deleteStudent = async(id) =>{
    const deletedStudent = await studentModel.remove(id);
    return deletedStudent;
}