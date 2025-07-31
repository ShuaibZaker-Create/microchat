radio.onReceivedNumber(function (receivedNumber) {
    basic.showString(String.fromCharCode(receivedNumber))
})
input.onButtonPressed(Button.A, function () {
    chars = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    ".",
    "!",
    "?",
    ",",
    ";",
    "'",
    "\"",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "-",
    "*",
    "/",
    "=",
    "<",
    ">",
    "×",
    "÷",
    "\\",
    "/",
    "(＾▽＾)",
    "(╯°□°）╯︵ ┻━┻",
    "(¬_¬)",
    "(•_•)",
    "(✿◠‿◠)",
    "(ಥ﹏ಥ)",
    "(☞ﾟヮﾟ)☞",
    "ʕ•ᴥ•ʔ"
    ]
    while (!(input.buttonIsPressed(Button.AB))) {
        Sending_Text = null
basic.showString("" + (chars[index]))
        if (input.buttonIsPressed(Button.B)) {
            Sending_Text = "" + Sending_Text + chars[index].charCodeAt(0)
            basic.pause(300)
        }
        if (input.buttonIsPressed(Button.A)) {
            index = (index + 1) % chars.length
            basic.pause(200)
        }
    }
    radio.sendNumber(parseFloat(Sending_Text))
})
let index = 0
let chars: string[] = []
let Sending_Text = ""
radio.setGroup(1)
