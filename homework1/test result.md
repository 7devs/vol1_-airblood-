GET 用户 /user
GET / 返回全部用户 YES
GET /:id 获取指定索引用户的全名（firstName + lastName） YES
    若用户不存在，返回状态码为 404 的 Not Found 信息 YES
PUT /:id 修改指定索引用户的年龄并返回结果（key 为 age，参考 图1）NEED EDIT
    若给定的年龄不是数值型，返回错误信息；YES
    若用户不存在，返回状态码为 404 的 Not Found 信息 YES
GET /count/:sex 获取指定性别的人数统计（例: /user/count/male 返回 10）YES
GET /ageAvg 返回所有用户年龄平均值 YES
GET /search?company=xxx 搜索，返回公司名称包含搜索字符串的用户列表（忽略大小写，参考 图2）NO
    若未找到任何用户，返回状态码为 404 的 Not Found 信息


GET / 返回全部唱片 YES
GET /:id 返回指定索引的唱片数据 YES
    若唱片不存在，返回状态码为 404 的 Not Found 信息 YES
PUT /:id 修改指定索引唱片的时长和标题并返回结果（key 为 length 和 title，参考 图3）YES
    若唱片不存在，返回状态码为 404 的 Not Found 信息 YES
GET /longerSong 返回歌曲时间大于3分钟的歌曲 NO
GET /singer/:name 返回指定歌手的全部歌曲 YES
    若唱片不存在，返回状态码为 404 的 Not Found 信息 YES
GET /search?type=xxx 获取指定分类下的歌曲列表（参考 图4)NO
    若分类不存在，返回状态码为 404 的 Not Found 信息
