export default function getFlag(type: string | undefined):Object {
    switch(type){
        case 'visa':
            return ({image:require('../../Images/visaCard.png'), colors:['','']})
        case 'mastercard':
            return {image:require('../../Images/masterCard.png'), colors:['','']}
        case 'elo':
            return {image:require('../../Images/eloCard.png'), colors:['','']}
        case 'american':
            return {image:require('../../Images/americanCard.png'), colors:['','']}
        default:
            return {}
    }
}