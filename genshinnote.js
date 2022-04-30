// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: orange; icon-glyph: sticky-note;

const mihoyoCookie = ""
const userRoleNumber = 0 // 如果你有多个角色，请将0依次改为1,2,3...后运行查看
// 请设置When Interacting为Open URL，URL为yuanshengame://

const textColor = Color.dynamic(Color.black(), Color.white())
const widgetColor = Color.dynamic(Color.white(), Color.black())

function md5(str) {
  function d(n, t) {
    var r = (65535 & n) + (65535 & t)
    return (((n >> 16) + (t >> 16) + (r >> 16)) << 16) | (65535 & r)
  }

  function f(n, t, r, e, o, u) {
    return d(((c = d(d(t, n), d(e, u))) << (f = o)) | (c >>> (32 - f)), r)
    var c, f
  }

  function l(n, t, r, e, o, u, c) {
    return f((t & r) | (~t & e), n, t, o, u, c)
  }

  function v(n, t, r, e, o, u, c) {
    return f((t & e) | (r & ~e), n, t, o, u, c)
  }

  function g(n, t, r, e, o, u, c) {
    return f(t ^ r ^ e, n, t, o, u, c)
  }

  function m(n, t, r, e, o, u, c) {
    return f(r ^ (t | ~e), n, t, o, u, c)
  }

  function i(n, t) {
    var r, e, o, u
    ;(n[t >> 5] |= 128 << t % 32), (n[14 + (((t + 64) >>> 9) << 4)] = t)
    for (
      var c = 1732584193,
        f = -271733879,
        i = -1732584194,
        a = 271733878,
        h = 0;
      h < n.length;
      h += 16
    )
      (c = l((r = c), (e = f), (o = i), (u = a), n[h], 7, -680876936)),
        (a = l(a, c, f, i, n[h + 1], 12, -389564586)),
        (i = l(i, a, c, f, n[h + 2], 17, 606105819)),
        (f = l(f, i, a, c, n[h + 3], 22, -1044525330)),
        (c = l(c, f, i, a, n[h + 4], 7, -176418897)),
        (a = l(a, c, f, i, n[h + 5], 12, 1200080426)),
        (i = l(i, a, c, f, n[h + 6], 17, -1473231341)),
        (f = l(f, i, a, c, n[h + 7], 22, -45705983)),
        (c = l(c, f, i, a, n[h + 8], 7, 1770035416)),
        (a = l(a, c, f, i, n[h + 9], 12, -1958414417)),
        (i = l(i, a, c, f, n[h + 10], 17, -42063)),
        (f = l(f, i, a, c, n[h + 11], 22, -1990404162)),
        (c = l(c, f, i, a, n[h + 12], 7, 1804603682)),
        (a = l(a, c, f, i, n[h + 13], 12, -40341101)),
        (i = l(i, a, c, f, n[h + 14], 17, -1502002290)),
        (c = v(
          c,
          (f = l(f, i, a, c, n[h + 15], 22, 1236535329)),
          i,
          a,
          n[h + 1],
          5,
          -165796510
        )),
        (a = v(a, c, f, i, n[h + 6], 9, -1069501632)),
        (i = v(i, a, c, f, n[h + 11], 14, 643717713)),
        (f = v(f, i, a, c, n[h], 20, -373897302)),
        (c = v(c, f, i, a, n[h + 5], 5, -701558691)),
        (a = v(a, c, f, i, n[h + 10], 9, 38016083)),
        (i = v(i, a, c, f, n[h + 15], 14, -660478335)),
        (f = v(f, i, a, c, n[h + 4], 20, -405537848)),
        (c = v(c, f, i, a, n[h + 9], 5, 568446438)),
        (a = v(a, c, f, i, n[h + 14], 9, -1019803690)),
        (i = v(i, a, c, f, n[h + 3], 14, -187363961)),
        (f = v(f, i, a, c, n[h + 8], 20, 1163531501)),
        (c = v(c, f, i, a, n[h + 13], 5, -1444681467)),
        (a = v(a, c, f, i, n[h + 2], 9, -51403784)),
        (i = v(i, a, c, f, n[h + 7], 14, 1735328473)),
        (c = g(
          c,
          (f = v(f, i, a, c, n[h + 12], 20, -1926607734)),
          i,
          a,
          n[h + 5],
          4,
          -378558
        )),
        (a = g(a, c, f, i, n[h + 8], 11, -2022574463)),
        (i = g(i, a, c, f, n[h + 11], 16, 1839030562)),
        (f = g(f, i, a, c, n[h + 14], 23, -35309556)),
        (c = g(c, f, i, a, n[h + 1], 4, -1530992060)),
        (a = g(a, c, f, i, n[h + 4], 11, 1272893353)),
        (i = g(i, a, c, f, n[h + 7], 16, -155497632)),
        (f = g(f, i, a, c, n[h + 10], 23, -1094730640)),
        (c = g(c, f, i, a, n[h + 13], 4, 681279174)),
        (a = g(a, c, f, i, n[h], 11, -358537222)),
        (i = g(i, a, c, f, n[h + 3], 16, -722521979)),
        (f = g(f, i, a, c, n[h + 6], 23, 76029189)),
        (c = g(c, f, i, a, n[h + 9], 4, -640364487)),
        (a = g(a, c, f, i, n[h + 12], 11, -421815835)),
        (i = g(i, a, c, f, n[h + 15], 16, 530742520)),
        (c = m(
          c,
          (f = g(f, i, a, c, n[h + 2], 23, -995338651)),
          i,
          a,
          n[h],
          6,
          -198630844
        )),
        (a = m(a, c, f, i, n[h + 7], 10, 1126891415)),
        (i = m(i, a, c, f, n[h + 14], 15, -1416354905)),
        (f = m(f, i, a, c, n[h + 5], 21, -57434055)),
        (c = m(c, f, i, a, n[h + 12], 6, 1700485571)),
        (a = m(a, c, f, i, n[h + 3], 10, -1894986606)),
        (i = m(i, a, c, f, n[h + 10], 15, -1051523)),
        (f = m(f, i, a, c, n[h + 1], 21, -2054922799)),
        (c = m(c, f, i, a, n[h + 8], 6, 1873313359)),
        (a = m(a, c, f, i, n[h + 15], 10, -30611744)),
        (i = m(i, a, c, f, n[h + 6], 15, -1560198380)),
        (f = m(f, i, a, c, n[h + 13], 21, 1309151649)),
        (c = m(c, f, i, a, n[h + 4], 6, -145523070)),
        (a = m(a, c, f, i, n[h + 11], 10, -1120210379)),
        (i = m(i, a, c, f, n[h + 2], 15, 718787259)),
        (f = m(f, i, a, c, n[h + 9], 21, -343485551)),
        (c = d(c, r)),
        (f = d(f, e)),
        (i = d(i, o)),
        (a = d(a, u))
    return [c, f, i, a]
  }

  function a(n) {
    for (var t = '', r = 32 * n.length, e = 0; e < r; e += 8)
      t += String.fromCharCode((n[e >> 5] >>> e % 32) & 255)
    return t
  }

  function h(n) {
    var t = []
    for (t[(n.length >> 2) - 1] = void 0, e = 0; e < t.length; e += 1)
      t[e] = 0
    for (var r = 8 * n.length, e = 0; e < r; e += 8)
      t[e >> 5] |= (255 & n.charCodeAt(e / 8)) << e % 32
    return t
  }

  function e(n) {
    for (var t, r = '0123456789abcdef', e = '', o = 0; o < n.length; o += 1)
      (t = n.charCodeAt(o)),
        (e += r.charAt((t >>> 4) & 15) + r.charAt(15 & t))
    return e
  }

  function r(n) {
    return unescape(encodeURIComponent(n))
  }

  function o(n) {
    return a(i(h((t = r(n))), 8 * t.length))
    var t
  }

  function u(n, t) {
    return (function (n, t) {
      var r,
        e,
        o = h(n),
        u = [],
        c = []
      for (
        u[15] = c[15] = void 0,
          16 < o.length && (o = i(o, 8 * n.length)),
          r = 0;
        r < 16;
        r += 1
      )
        (u[r] = 909522486 ^ o[r]), (c[r] = 1549556828 ^ o[r])
      return (
        (e = i(u.concat(h(t)), 512 + 8 * t.length)), a(i(c.concat(e), 640))
      )
    })(r(n), r(t))
  }

  function t(n, t, r) {
    return t ? (r ? u(t, n) : e(u(t, n))) : r ? o(n) : e(o(n))
  }

  return t(str)
}

async function makeGenshinRequest(url) {
  var time_ = String(parseInt(Date.now()/1000))
  var random_ = String(parseInt((Math.random()+1)*100000))
  var check = md5("salt=xV8v4Qu54lUKrEYFZkJhB8cuOh9Asafs&t="+time_+"&r="+random_+"&b=&q="+url.split("?")[1])

  var ds = time_+","+random_+","+check

  const req = new Request(url)
  req.method = "GET"
  req.headers = {
    "Cookie": mihoyoCookie,
    "DS": ds,
    "x-rpc-app_version": "2.20.1",
    "x-rpc-client_type": "5"
  };

  await req.load()
  return req.loadJSON()
}

function formatFileSize(fileSize) {
  if (fileSize < (1024 * 1024)) {
    let temp = fileSize / 1024
    temp = temp.toFixed(2)
    return temp + 'KB'
  } else if (fileSize < (1024 * 1024 * 1024)) {
    let temp = fileSize / (1024 * 1024)
    temp = temp.toFixed(2)
    return temp + 'MB'
  } else {
    let temp = fileSize / (1024 * 1024 * 1024)
    temp = temp.toFixed(2)
    return temp + 'GB'
  }
}

function formatExpRemainTime(timeRemain) {
    let processTimeTmp = parseInt(timeRemain / 60)

    let hour = parseInt(processTimeTmp/60)
    let minute = parseInt(processTimeTmp%60)
    let second = parseInt(timeRemain%60)

    return [hour.toString().padStart(2,'0'), minute.toString().padStart(2,'0'), second.toString().padStart(2,'0')]
}

function getFont(fontName, fontSize) {
  const fontGenerator = {
    medium: function () {
      return Font.mediumMonospacedSystemFont(fontSize)
    },
    regular: function () {
      return Font.regularMonospacedSystemFont(fontSize)
    },
    bold: function () {
      return Font.boldMonospacedSystemFont(fontSize)
    },
    heavy: function () {
      return Font.heavyMonospacedSystemFont(fontSize)
    },
    black: function () {
      return Font.blackMonospacedSystemFont(fontSize)
    }
  }

  const systemFont = fontGenerator[fontName]
  if (systemFont) {
    return systemFont()
  }
  return new Font(fontName, fontSize)
}

var genshinData = {
    "current_resin": 0,
    "max_resin": 160,
    "resin_recovery_time": "0",
    "finished_task_num": 0,
    "total_task_num": 4,
    "is_extra_task_reward_received": false,
    "remain_resin_discount_num": 0,
    "resin_discount_num_limit": 3,
    "current_expedition_num": 0,
    "max_expedition_num": 5,
    "expeditions": [],
    "current_home_coin": 0,
    "max_home_coin": 2400,
    "home_coin_recovery_time": "0",
    "transformer":{
        "obtained":true,
        "recovery_time":{
            "Day":0,
            "Hour":0,
            "Minute":0,
            "Second":0,
            "reached":true
        }
    }
}

async function createWidget() {
  // 获取角色信息
  var genshinRsp = await makeGenshinRequest("https://api-takumi.mihoyo.com/binding/api/getUserGameRolesByCookie?game_biz=hk4e_cn")
  const userRole = genshinRsp["data"]["list"][userRoleNumber]

  // 获取原神便笺
  var genshinRsp = await makeGenshinRequest("https://api-takumi.mihoyo.com/game_record/app/genshin/api/dailyNote?role_id="+userRole["game_uid"]+"&server="+userRole["region"])
  genshinData = genshinRsp["data"]

  // 创建小组件
  const widget = new ListWidget()

  // 创建原神标题部分
  var stackHeader = widget.addStack()
  stackHeader.centerAlignContent()

  // 添加原神图标
  var req = new Request("https://ys.mihoyo.com/main/favicon.ico")
  req.method = 'GET'
  var stackImgItem = stackHeader.addImage(await req.loadImage())
  stackImgItem.imageSize = new Size(12, 12)
  stackImgItem.cornerRadius = 5
  stackHeader.addSpacer(3)

  // 添加原神标题
  var textItem = stackHeader.addText("原神便笺")
  textItem.font = getFont('semibold', 10)
  textItem.textColor = textColor

  // 添加更新时间
  stackHeader.addSpacer()
  var myDate = new Date();
  var textItem = stackHeader.addText(`${myDate.getHours().toString().padStart(2,'0')}:${myDate.getMinutes().toString().padStart(2,'0')}更新`)
  textItem.font = getFont('semibold', 10)
  textItem.textColor = Color.dynamic(Color.darkGray(), Color.lightGray())
  textItem.rightAlignText()

  // 添加旅行者信息
  var textItem = widget.addText(`${userRole["level"]}级 - ${userRole["nickname"]}`)
  textItem.font = getFont('regular', 11)
  textItem.textColor = textColor
  textItem.centerAlignText()

  widget.addSpacer(5)

  // 添加小标题
  // var textItem = widget.addText("详细数据")
  // textItem.font = getFont('semibold', 11)
  // textItem.textColor = textColor

  // 添加 树脂信息
  var stackText = widget.addStack()
  var textItem = stackText.addText("·原粹树脂: ")
  textItem.font = getFont('regular', 9)
  textItem.textColor = textColor

  var textItem = stackText.addText(`已累计 ${genshinData["current_resin"]} 个`)
  textItem.font = getFont('regular', 9)
  if (genshinData["current_resin"] >= genshinData["max_resin"]*0.9) {
    textItem.textColor = Color.red()
  } else {
    textItem.textColor = Color.green()
  }

  if (genshinData["current_resin"] != genshinData["max_resin"]) {
    var remainTime = formatExpRemainTime(parseInt(genshinData["resin_recovery_time"]))
    var textItem = widget.addText(`(剩余 ${remainTime[0]}:${remainTime[1]})`)
    textItem.font = getFont('regular', 9)
    textItem.textColor = Color.green()
    textItem.rightAlignText()
  } else {
    var textItem = widget.addText(`已达上限！`)
    textItem.font = getFont('regular', 9)
    textItem.textColor = Color.red()
    textItem.rightAlignText()
  }

  // 添加 洞天宝钱信息
  var stackText = widget.addStack()
  var textItem = stackText.addText("·洞天宝钱: ")
  textItem.font = getFont('regular', 9)
  textItem.textColor = textColor

  var textItem = stackText.addText(`已累计 ${genshinData["current_home_coin"]} 枚`)
  textItem.font = getFont('regular', 9)
  if (genshinData["current_home_coin"] >= genshinData["max_home_coin"]*0.9) {
    textItem.textColor = Color.red()
  } else {
    textItem.textColor = Color.green()
  }

  if (genshinData["current_home_coin"] != genshinData["max_home_coin"]) {
    var remainTime = formatExpRemainTime(parseInt(genshinData["home_coin_recovery_time"]))
    var textItem = widget.addText(`(剩余 ${remainTime[0]}:${remainTime[1]})`)
    textItem.font = getFont('regular', 9)
    textItem.textColor = Color.green()
    textItem.rightAlignText()
  } else {
    var textItem = widget.addText(`已达上限！`)
    textItem.font = getFont('regular', 9)
    textItem.textColor = Color.red()
    textItem.rightAlignText()
  }

  // 添加 每日委托信息
  var stackText = widget.addStack()
  var textItem = stackText.addText("·每日委托: ")
  textItem.font = getFont('regular', 9)
  textItem.textColor = textColor

  var textItem = stackText.addText(`已完成 ${genshinData["finished_task_num"]} 个`)
  textItem.font = getFont('regular', 9)
  if (genshinData["finished_task_num"] != genshinData["total_task_num"]) {
    textItem.textColor = Color.red()
  } else {
    textItem.textColor = Color.green()
  }

  // 添加 周本信息
  var stackText = widget.addStack()
  var textItem = stackText.addText("·周本减半: ")
  textItem.font = getFont('regular', 9)
  textItem.textColor = textColor

  var textItem = stackText.addText(`还剩余 ${genshinData["remain_resin_discount_num"]} 次`)
  textItem.font = getFont('regular', 9)
  if (genshinData["remain_resin_discount_num"] != 0) {
    textItem.textColor = Color.red()
  } else {
    textItem.textColor = Color.green()
  }

  // 添加 质变仪信息
  var stackText = widget.addStack()
  var textItem = stackText.addText("·参量质变仪: ")
  textItem.font = getFont('regular', 9)
  textItem.textColor = textColor

  
 
  if (genshinData["transformer"]["recovery_time"]["reached"] != false) {
    var textItem = stackText.addText(`现可使用`) 
    textItem.font = getFont('regular', 9)
    textItem.textColor = Color.red()
  } else {
    var textItem = stackText.addText(` ${genshinData["transformer"]["recovery_time"]["Day"]} 天后可用`)
    textItem.font = getFont('regular', 9)
    textItem.textColor = Color.green()
  }

  // 添加 派遣信息
  var stackText = widget.addStack()
  var textItem = stackText.addText("·探索派遣: ")
  textItem.font = getFont('regular', 9)
  textItem.textColor = textColor

  var textItem = stackText.addText(`已派出 ${genshinData["current_expedition_num"]} 人`)
  textItem.font = getFont('regular', 9)
  if (genshinData["current_expedition_num"] != genshinData["max_expedition_num"]) {
    textItem.textColor = Color.red()
  } else {
    textItem.textColor = Color.green()
  }

  // 生成派遣状态
  var stackExpImg = widget.addStack()
  stackExpImg.addSpacer(2)
  var stackExpStatus = widget.addStack()
  stackExpStatus.addSpacer(2)

  for (var i=0; i<genshinData["expeditions"].length;i++) {
    var char = genshinData["expeditions"][i]

    if (char["status"] == "Finished") {
      // 添加 派遣状态
      var textItem = stackExpStatus.addText("已完成")
      textItem.font = getFont('regular', 7)
      textItem.textColor = Color.red()
      if (i!=4) {stackExpStatus.addSpacer(3)}
    } else {
      // 添加 派遣状态
      var remainTime = formatExpRemainTime(parseInt(char["remained_time"]))
      // var textItem = stackExpStatus.addText("进行中")
      stackExpStatus.addSpacer(0.5)
      var textItem = stackExpStatus.addText(`${remainTime[0]}:${remainTime[1]}`)
      textItem.font = getFont('regular', 7)
      textItem.textColor = Color.green()
      if (i!=4) {stackExpStatus.addSpacer(3)}
    }

    var req = new Request(char["avatar_side_icon"])
    req.method = 'GET'
    var imgItem = stackExpImg.addImage(await req.loadImage())
    imgItem.imageSize = new Size(20, 20)
    imgItem.cornerRadius = 10

    if (i!=4) {stackExpImg.addSpacer(4.5)}
  }

  return widget
}

async function main() {
  if (config.runsInWidget) { //为桌面小组件，检查大小
    if (config.widgetFamily != 'small') {
      let widget = new ListWidget()
      widget.addText("小组件大小错误")
      Script.setWidget(widget)
      return
    }
  }
  try { //添加运行错误提示
    let widget = await createWidget()
    if (!config.runsInWidget) { //测试时展示
      widget.presentSmall()
      return
    }
    Script.setWidget(widget)
    widget.backgroundColor = widgetColor
  } catch (err) {
    console.log(err)
    let widget = new ListWidget()
    widget.addText("运行异常")
    Script.setWidget(widget)
    return
  }
}

// main
await main()
Script.complete()
