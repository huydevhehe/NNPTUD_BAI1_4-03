let dataRole = [
  {
    "id": "r1",
    "name": "Quản trị viên",
    "description": "Toàn quyền quản lý hệ thống",
    "creationAt": "2026-03-04T08:00:00.000Z",
    "updatedAt": "2026-03-04T08:00:00.000Z"
  },
  {
    "id": "r2",
    "name": "Biên tập viên",
    "description": "Quản lý nội dung và dữ liệu",
    "creationAt": "2026-03-04T08:00:00.000Z",
    "updatedAt": "2026-03-04T08:00:00.000Z"
  },
  {
    "id": "r3",
    "name": "Người dùng",
    "description": "Tài khoản người dùng thông thường",
    "creationAt": "2026-03-04T08:00:00.000Z",
    "updatedAt": "2026-03-04T08:00:00.000Z"
  }
]

let dataUser = [
  {
    "username": "nguyenvana",
    "password": "123456",
    "email": "vana@gmail.com",
    "fullName": "Nguyễn Văn A",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": true,
    "loginCount": 15,
    "role": {
      "id": "r1",
      "name": "Quản trị viên",
      "description": "Toàn quyền quản lý hệ thống"
    },
    "creationAt": "2026-03-04T08:10:00.000Z",
    "updatedAt": "2026-03-04T08:10:00.000Z"
  },
  {
    "username": "tranthib",
    "password": "123456",
    "email": "thib@gmail.com",
    "fullName": "Trần Thị B",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": true,
    "loginCount": 7,
    "role": {
      "id": "r2",
      "name": "Biên tập viên",
      "description": "Quản lý nội dung và dữ liệu"
    },
    "creationAt": "2026-03-04T08:11:00.000Z",
    "updatedAt": "2026-03-04T08:11:00.000Z"
  },
  {
    "username": "levanc",
    "password": "123456",
    "email": "vanc@gmail.com",
    "fullName": "Lê Văn C",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": true,
    "loginCount": 3,
    "role": {
      "id": "r3",
      "name": "Người dùng",
      "description": "Tài khoản người dùng thông thường"
    },
    "creationAt": "2026-03-04T08:12:00.000Z",
    "updatedAt": "2026-03-04T08:12:00.000Z"
  }
]

module.exports = {
  dataRole,
  dataUser
}