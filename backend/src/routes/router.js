const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to LMS Backend");
});

module.exports = router;
