const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/customer-answer', function (req, res) {


    var passYes = req.session.data['customer_answer']

  console.log("passYes", passYes);
    // Check whether the variable matches a condition
    if (passYes == "Yes"){
      // Send user to next page
      res.redirect('success')

    } else if (passYes == "No") {
      // Send user to ineligible page
      res.redirect('failure')
    }
})

  router.post('/customer-answer1', function (req, res) {

      var passYes = req.session.data['customer_answer1']

    console.log("passYes", passYes);
      // Check whether the variable matches a condition
      if (passYes == "Yes"){
        // Send user to next page
        res.redirect('question_2')
      } else if (passYes == "No") {
        // Send user to ineligible page
        res.redirect('question_2')
      }

    })

    router.post('/customer-answer2', function (req, res) {

        var passYes = req.session.data['customer_answer2']

      console.log("passYes", passYes);
        // Check whether the variable matches a condition
        if (passYes == "Yes"){
          // Send user to next page
          res.redirect('success')
        } else if (passYes == "No") {
          // Send user to ineligible page
          res.redirect('failure2')
        }

      })

      router.post('/customer-answer3', function (req, res) {

          var passYes = req.session.data['customer_answer3']

        console.log("passYes", passYes);
          // Check whether the variable matches a condition
          if (passYes == "Yes"){
            // Send user to next page
            res.redirect('question_3_1')
          } else if (passYes == "No") {
            // Send user to ineligible page
            res.redirect('question_3_1')
          }

        })

      router.post('/customer-answer3-1', function (req, res) {

          var passYes = req.session.data['customer_answer3-1']

        console.log("passYes", passYes);
          // Check whether the variable matches a condition
          if (passYes == "Yes"){
            // Send user to next page
            res.redirect('failure1')
          } else if (passYes == "No") {
            // Send user to ineligible page
            res.redirect('failure2')
          }

        })

        router.post('/customer-answer4', function (req, res) {

            var passYes = req.session.data['customer_answer4']

          console.log("passYes", passYes);
            // Check whether the variable matches a condition
            if (passYes == "Yes"){
              // Send user to next page
              res.redirect('question_4_1')
            } else if (passYes == "No") {
              // Send user to ineligible page
              res.redirect('question_4_1')
            }

          })


          router.post('/customer-answer4-1', function (req, res) {

              var passYes = req.session.data['customer_answer4-1']

            console.log("passYes", passYes);
              // Check whether the variable matches a condition
              if (passYes == "Yes"){
                // Send user to next page
                res.redirect('success')
              } else if (passYes == "No") {
                // Send user to ineligible page
                res.redirect('failure3')
              }

            })

          router.post('/customer-answer5', function (req, res) {

              var passYes = req.session.data['customer_answer5']

            console.log("passYes", passYes);
              // Check whether the variable matches a condition
              if (passYes == "Yes"){
                // Send user to next page
                res.redirect('success')
              } else if (passYes == "No") {
                // Send user to ineligible page
                res.redirect('failure1')
              }

            })

module.exports = router
