export const DISCLAIMER = "<strong>DISCLAIMER</strong> Not medical advice. DogEatBad.com is a non-professional site intended for quick access to more knowledgeable sources. When in doubt, consult a veterinarian. Content quoted is owned by their respective sources as cited; no infringement is intended, so kindly ask for removal before suing.";
const disclaimer_copy1 = "Don't trust DogEatBad.com more than you would a stranger who has Googled something. But like, a stranger that very strongly doesn't want to hurt your dog.";

const GOOD_MESSAGE = "You're good to go! This stuff seems to be alright for puppers."
const BAD_MESSAGE = "This stuff is no good. Immediately stop feeding your pooch this, and seek medical attention if necessary."
const IDK_MESSAGE = "Not so sure about that... best to be cautious and check elsewhere. Please seek out more information elsewhere, and get medical attention if necessary."
const OK_MESSAGE = "This stuff isn't bad, but it's also not great. No need to freak out, but you should probably stop feeding your pooch this stuff."
export const messages = {
    "good": GOOD_MESSAGE,
    "bad": BAD_MESSAGE,
    "idk": IDK_MESSAGE,
    "ok": OK_MESSAGE
}

// TODO action messages, ie what the user should do for each verdict,
//      eg bad|idk: If your dog has already eaten [food], search online for what steps to take next and [seek medical attention](general/hotline resource) if necessary.