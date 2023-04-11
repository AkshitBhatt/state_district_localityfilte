const express = require("express");
const db = require("./models/kinnaur");
const userRoutes = require("./routes/router");

const fs = require("fs");
const csv = require("csv-parser");
const Kinnaur = require("./models/kinnaur");

const csvFilePath = "/home/akshit/state_district_localityfilter/kinnaur .csv";

// Read the CSV file
fs.createReadStream(csvFilePath)
  .pipe(csv())
  .on("error", (error) => {
    console.error("Error reading CSV file:", error);
  })
  .on("data", async (row) => {
    try {
      // Create a new Kinnaur instance for each row in the CSV file
      const kinnaur = await Kinnaur.create({
        "GLOBAL UNIQUE IDENTIFIER": row["GLOBAL UNIQUE IDENTIFIER"],
        "LAST EDITED DATE": row["LAST EDITED DATE"],
        "TAXONOMIC ORDER": row["TAXONOMIC ORDER"],
        CATEGORY: row["CATEGORY"],
        "TAXON CONCEPT ID": row["TAXON CONCEPT ID"],
        "COMMON NAME": row["COMMON NAME"],
        "SCIENTIFIC NAME": row["SCIENTIFIC NAME"],
        "SUBSPECIES COMMON NAME": row["SUBSPECIES COMMON NAME"],
        "SUBSPECIES SCIENTIFIC NAME": row["SUBSPECIES SCIENTIFIC NAME"],
        "EXOTIC CODE": row["EXOTIC CODE"],
        "OBSERVATION COUNT": row["OBSERVATION COUNT"],
        "BREEDING CODE": row["BREEDING CODE"],
        "BREEDING CATEGORY": row["BREEDING CATEGORY"],
        "BEHAVIOR CODE": row["BEHAVIOR CODE"],
        "AGE/SEX": row["AGE/SEX"],
        COUNTRY: row["COUNTRY"],
        "COUNTRY COD": row["COUNTRY COD"],
        STATE: row["STATE"],
        "STATE CODE": row["STATE CODE"],
        COUNTY: row["COUNTY"],
        "COUNTY CODE": row["COUNTY CODE"],
        "IBA CODE": row["IBA CODE"],
        "BCR CODE": row["BCR CODE"],
        "USFWS CODE": row["USFWS CODE"],
        "ATLAS BLOCK": row["ATLAS BLOCK"],
        LOCALITY: row["LOCALITY"],
        "LOCALITY ID": row["LOCALITY ID"],
        "LOCALITY TYPE": row["LOCALITY TYPE"],
        LATITUDE: row["LATITUDE"],
        LONGITUDE: row["LONGITUDE"],
        "OBSERVATION DATE": row["OBSERVATION DATE"],
        "TIME OBSERVATIONS STARTED": row["TIME OBSERVATIONS STARTED"],
        "OBSERVER ID": row["OBSERVER ID"],
        "SAMPLING EVENT IDENTIFIER": row["SAMPLING EVENT IDENTIFIER"],
        "PROTOCOL TYPE": row["PROTOCOL TYPE"],
        "PROTOCOL CODE": row["PROTOCOL CODE"],
        "PROJECT CODE": row["PROJECT CODE"],
        "DURATION MINUTES": row["DURATION MINUTES"],
        "EFFORT DISTANCE KM": row["EFFORT DISTANCE KM"],
        "EFFORT AREA HA": row["EFFORT AREA HA"],
        "NUMBER OBSERVERS": row["NUMBER OBSERVERS"],
        "ALL SPECIES REPORTED": row["ALL SPECIES REPORTED"],
        "GROUP IDENTIFIER": row["GROUP IDENTIFIER"],
        "HAS MEDIA": row["HAS MEDIA"],
        APPROVED: row["APPROVED"],
        REVIEWED: row["REVIEWED"],
        REASON: row["REASON"],
        "TRIP COMMENTS": row["TRIP COMMENTS"],
        "SPECIES COMMENTS": row["SPECIES COMMENTS"],
      });
      console.log("New Kinnaur instance created:", kinnaur);
    } catch (error) {
      console.error("Error creating Kinnaur instance:", error);
    }
  })
  .on("end", () => {
    console.log("CSV file processing complete");
  });

const app = express();
app.use("/users", userRoutes);

db.sync().then(() => {
  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
});
