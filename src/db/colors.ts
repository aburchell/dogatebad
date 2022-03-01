// https://stackoverflow.com/questions/42584228/how-can-i-define-a-type-for-a-css-color-in-typescript
type Color = "#23AD48" | "#FFD026" | "#DB3131" | "#6D7BEB" | "#FDF0BB" | "#6D7BEB" | "#FF8221"

const backgroundBeige:Color = "#FDF0BB"
const goodGreen:Color = "#FFD026"
const okYellow:Color = "#FFD026"
const idkOrange:Color = "#FF8221"
const badRed:Color = "#DB3131"
const happyBlue:Color = "#6D7BEB"

export const colors = {
    "background": backgroundBeige,
    "good": goodGreen,
    "ok": okYellow,
    "idk": idkOrange,
    "bad": badRed,
    "happy": happyBlue,
}