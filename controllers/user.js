export const fileSave = async (req, res) => {
  try {
    if (!req.files.file) {
      res.send({
        success: false,
        message: "There was no file found in request",
        payload: {},
      });
    } else {
      let file = req.files.file;
      file.mv("./uploads/" + file.name);
      res.send({
        success: true,
        message: "File was uploaded successfuly",
        payload: {
          name: file.name,
          mimetype: file.mimetype,
          size: file.size,
          path: "/uploads/",
        },
      });
    }
  } catch (err) {
    res.status(500).send({
      status: false,
      message: "Unexpected problem",
      payload: {},
    });
  }
};
