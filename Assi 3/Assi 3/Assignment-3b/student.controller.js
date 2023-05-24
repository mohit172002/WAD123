const studentModel = require("./student.model.js");

async function insertData (req, res) {
    try
    {
       
        const 
        {
            studentName,
            studentEmail,
            studentCity
        } = req.body;
        const data = 
        {
            studentName,
            studentEmail,
            studentCity
        }
        console.log(data)
        const response = await studentModel.create(data);
        return res.status(200).json({message: "Student Account created Successfully", data: response});
    }
    catch(error)
    {
        console.log(error)
        return res.status(500).json({message: "internal server error"});
    }
}

async function getData (req, res) 
{
    // const {studentEmail} = req.body;
    try
    {
        const response = await studentModel.find({});
        let message = " Login successfull";
        if(response.length === 0)
        {
            message = "invalid data";
        }
        return res.status(200).json({response});
    }
    catch(error)
    {
        console.log(error);
        return res.status(500).json({message: "internal server error"});
    }
}


async function updateData(req, res) {
    const { studentName, updatedStudentEmail, updatedStudentCity } = req.body;
    try {
      const response = await studentModel.findOneAndUpdate(
        { studentName },
        { studentEmail: updatedStudentEmail, studentCity: updatedStudentCity },
        { new: true }
      );
      if (response) {
        return res.status(200).json({
          message: "Student data updated successfully",
          data: response,
        });
      } else {
        return res.status(404).json({ message: "Student not found" });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
  
  async function deleteData(req, res) 
  {
    const { studentName } = req.body;
    console.log(studentName);
    try 
    {
      const response = await studentModel.findOneAndDelete({ studentName });
      if (response) 
      {
        return res.status(200).json({
          message: "Student data deleted successfully",
          data: response,
        });
      } 
      else 
      {
        return res.status(404).json({ message: "Student not found" });
      }
    } 
    catch (error) 
    {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }


module.exports = {
    updateData,
    deleteData,
    insertData,
    getData,
  };