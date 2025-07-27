enum RadioMessage {
    message1 = 49434,
    Sending_Text = 45249
}
input.onButtonPressed(Button.A, function () {
    while (!(input.buttonIsPressed(Button.AB))) {
        while (!(input.buttonIsPressed(Button.A))) {
            basic.showString("A")
            if (input.buttonIsPressed(Button.B)) {
                Sending_Text = parseFloat("" + Sending_Text + "A".charCodeAt(1))
            }
        }
    }
    radio.sendMessage(Sending_Text)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
let Sending_Text = 0
radio.setGroup(1)
Sending_Text = 0
