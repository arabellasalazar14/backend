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
export const updateStudent = async (student) => {
    const updateStudent = await studentModel.update(student);
    return updateStudent;
}

// delete
export const deleteStudent = async(id) =>{
    const deletedStudent = await studentModel.remove(id);
    return deletedStudent;
}