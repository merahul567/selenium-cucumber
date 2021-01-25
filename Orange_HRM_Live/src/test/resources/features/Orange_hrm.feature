Feature: OrangeHRM Feature File

  @loginPage
  Scenario: TC01_Successful Employee login to OrangeHRM portal
    Given navigate to Orange HRM page
    When user logged in using username as "Admin" and password as "admin123"
    Then home page should be displayed

  @changeDetails
  Scenario Outline: TC05_Personal details- modification with valid values- "First Name"
    Given User is in to My Info Page
    When User clicked on Edit button
    And User changes the first name to "<first_name>"
    And User clicked on save button
    Then updated first name "<first_name>" should be diplayed

    Examples: 
      | first_name |
      | Rahul      |

  @changeDetails
  Scenario: TC08_Check the upload of a PNG format image
    When User click on change photo
    And User select a png photo to upload
    And User click on upload button
    #Then Photo should be uploaded
    

