exports.run = (client, message, args) => {
    message.reply(`você tem ${RandInt(1,35)}cm mole e ${RandInt(1,35)} duro.`)
};

function RandInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  