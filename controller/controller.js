const { stat } = require("fs");
const Kinnaur = require("../models/kinnaur");
const Sequelize = require("sequelize");

const UserController = {
  async state(req, res) {
    try {
      const { state, county } = req.query;
      if (state && county) {
        const localities = await Kinnaur.findAll({
          attributes: [
            [Sequelize.fn("DISTINCT", Sequelize.col("LOCALITY")), "locality"],
          ],
          where: {
            STATE: state,
            COUNTY: county,
          },
        });
        res.json({ localities });
      } else if (state) {
        const districts = await Kinnaur.findAll({
          attributes: [
            [Sequelize.fn("DISTINCT", Sequelize.col("COUNTY")), "district"],
          ],
          where: {
            STATE: "Himachal Pradesh",
          },
        });
        const districtNames = districts.map(
          (district) => district.dataValues.district
        );
        res.json({ districts: districtNames });
      } else {
        const states = await Kinnaur.findAll({
          attributes: [
            [Sequelize.fn("DISTINCT", Sequelize.col("STATE")), "state"],
          ],
        });
        res.json({ states });
        res.status(200).json(states.rows.map((row) => row.STATE));
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  },
};

module.exports = UserController;
