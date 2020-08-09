Feature: Greetings

  Scenario Outline: Greeting Stark Lords
    Given a greeting logger
    When asked to greet <name>
    Then should log "<greeting>"

    Examples:
      | name   | greeting      |
      | Eddard | Hello Eddard! |
      | Benjen | Hello Benjen! |
      | Robb   | Hello Robb!   |
