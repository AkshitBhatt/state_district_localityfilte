const Sequelize = require("sequelize");
const db = require("../config/db");

const Kinnaur = db.define("kinnaur", {
    "GLOBAL UNIQUE IDENTIFIER": Sequelize.STRING,
  "LAST EDITED DATE": Sequelize.STRING,
  "TAXONOMIC ORDER": Sequelize.STRING,
  "CATEGORY": Sequelize.STRING,
  "TAXON CONCEPT ID": Sequelize.STRING,
  "COMMON NAME": Sequelize.STRING,
  "SCIENTIFIC NAME": Sequelize.STRING,
  "SUBSPECIES COMMON NAME": Sequelize.STRING,
  "SUBSPECIES SCIENTIFIC NAME": Sequelize.STRING,
  "EXOTIC CODE": Sequelize.STRING,
  "OBSERVATION COUNT": Sequelize.STRING,
  "BREEDING CODE": Sequelize.STRING,
  "BREEDING CATEGORY": Sequelize.STRING,
  "BEHAVIOR CODE": Sequelize.STRING,
  "AGE/SEX": Sequelize.STRING,
  "COUNTRY": Sequelize.STRING,
  "COUNTRY COD": Sequelize.STRING,
  "STATE": Sequelize.STRING,
  "STATE CODE": Sequelize.STRING,
  "COUNTY": Sequelize.STRING,
  "COUNTY CODE": Sequelize.STRING,
  "IBA CODE": Sequelize.STRING,
  "BCR CODE": Sequelize.STRING,
  "USFWS CODE": Sequelize.STRING,
  "ATLAS BLOCK": Sequelize.STRING,
  "LOCALITY": Sequelize.STRING,
  "LOCALITY ID": Sequelize.STRING,
  "LOCALITY TYPE": Sequelize.STRING,
  "LATITUDE": Sequelize.STRING,
  "LONGITUDE": Sequelize.STRING,
  "OBSERVATION DATE": Sequelize.STRING,
  "TIME OBSERVATIONS STARTED": Sequelize.STRING,
  "OBSERVER ID": Sequelize.STRING,
  "SAMPLING EVENT IDENTIFIER": Sequelize.STRING,
  "PROTOCOL TYPE": Sequelize.STRING,
  "PROTOCOL CODE": Sequelize.STRING,
  "PROJECT CODE": Sequelize.STRING,
  "DURATION MINUTES": Sequelize.STRING,
  "EFFORT DISTANCE KM": Sequelize.STRING,
  "EFFORT AREA HA": Sequelize.STRING,
  "NUMBER OBSERVERS": Sequelize.STRING,
  "ALL SPECIES REPORTED": Sequelize.STRING,
  "GROUP IDENTIFIER": Sequelize.STRING,
  "HAS MEDIA": Sequelize.STRING,
  "APPROVED": Sequelize.STRING,
  "REVIEWED": Sequelize.STRING,
  "REASON": Sequelize.STRING,
  "TRIP COMMENTS": Sequelize.STRING,
  "SPECIES COMMENTS": Sequelize.TEXT
});

module.exports = Kinnaur;
