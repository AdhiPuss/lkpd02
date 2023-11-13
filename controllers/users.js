const User = require('../models/User')

module.exports = {
    //get all user
    index: async (req, res) => {
        try {
          const users = await User.find()
          if(users.length > 0){
            res.status(200).json({
              status: true,
              data: users,
              method: req.method,
              url: req.url
            })
            
          }else{
            res.json({
              status: false,
              message: "Data masih kosong bro"
            })
          }
        } catch (error) {
            res.status(400).json({success: false})
        }
        },
        store: async (req, res) => {
            try {
              const user = await User.create(req.body)
              // res.json(users)
              res.status(200).json({
                status: true,
                data: user,
                method: req.method,
                url: req.url,
                message: "Data berhasil ditambahkan"
              })
            } catch (error) {
                res.status(400).json({success: false})
            }
        },
        update: async (req, res) => {
            try {
               const user = await User.findByIdAndUpdate(req.params.id, req.body, {
                  new: true,
                  runValidators: true
               })
                res.json({
                  status: true,
                  data: user,
                  method: req.method,
                  url: req.url,
                  message: "Data berhasil diubah"
                })
    
            } catch (error) {
              res.status(400).json({sucess: false})
            }
            
            },
        delete: (req, res) => {
            const id = req.params.id
            users = users.filter(user => user.id != id)
        
            res.json({
                status: true,
                data: users,
                method: req.method,
                url: req.url,
                message: "Data berhasil dihapus"
            })
          },
}