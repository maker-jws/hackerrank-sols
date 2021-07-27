let re1 = /(Mr\.|Mrs\.|Ms\.|Dr\.|Er\.)[A-Za-z]+$/;
// match any of the listed options followed by characters (and not special characters)

let re2 = /^([a, e, i, o, u]).*\1$/igm
// check if first and last characters are matching vowels 
// capture first characters that match from set, followed by any number with last char match value of capture