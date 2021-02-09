$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CreateTicket.feature");
formatter.feature({
  "line": 1,
  "name": "CreateTicket feature",
  "description": "Feature за добавяне на нов тикет към съпорт центнъра",
  "id": "createticket-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Добавяне на тикет с валидни данни",
  "description": "",
  "id": "createticket-feature;добавяне-на-тикет-с-валидни-данни",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "потребителят отваря прозорец за създаване на тикет",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "потребителят въвежда заглавие \"Тест 1\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "потребителят въвежда описание \"Имам проблеми\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "потребителят въвежда дата на проблема \"12.12.2020\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "потребителят въвежда статус на тикета \"Активен\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "потребителят натиска бутон за добавяне",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "вижда съобщение с текст \"Заявката е успешно регистрирана!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateTicketSteps.OnOpenWindow()"
});
formatter.result({
  "duration": 122288300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Тест 1",
      "offset": 31
    }
  ],
  "location": "CreateTicketSteps.InsertTitle(String)"
});
formatter.result({
  "duration": 1671500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Имам проблеми",
      "offset": 31
    }
  ],
  "location": "CreateTicketSteps.InsertDescription(String)"
});
formatter.result({
  "duration": 67200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12.12.2020",
      "offset": 39
    }
  ],
  "location": "CreateTicketSteps.InsertDate(String)"
});
formatter.result({
  "duration": 66900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Активен",
      "offset": 39
    }
  ],
  "location": "CreateTicketSteps.InsertStatus(String)"
});
formatter.result({
  "duration": 66300,
  "status": "passed"
});
formatter.match({
  "location": "CreateTicketSteps.OnClickButton()"
});
formatter.result({
  "duration": 2619300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Заявката е успешно регистрирана!",
      "offset": 25
    }
  ],
  "location": "CreateTicketSteps.MessageText(String)"
});
formatter.result({
  "duration": 1280600,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Липсващо валидно заглавие",
  "description": "",
  "id": "createticket-feature;липсващо-валидно-заглавие",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "потребителят отваря прозорец за създаване на тикет",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "потребителят въвежда описание \"Имам много проблеми\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "потребителят въвежда дата на проблема \"13.01.2002\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "потребителят въвежда статус на тикета \"Забавен\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "потребителят натиска бутон за добавяне",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "вижда съобщение с текст \"Моля въведете заглавие!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateTicketSteps.OnOpenWindow()"
});
formatter.result({
  "duration": 96000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Имам много проблеми",
      "offset": 31
    }
  ],
  "location": "CreateTicketSteps.InsertDescription(String)"
});
formatter.result({
  "duration": 81100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13.01.2002",
      "offset": 39
    }
  ],
  "location": "CreateTicketSteps.InsertDate(String)"
});
formatter.result({
  "duration": 35000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Забавен",
      "offset": 39
    }
  ],
  "location": "CreateTicketSteps.InsertStatus(String)"
});
formatter.result({
  "duration": 60700,
  "status": "passed"
});
formatter.match({
  "location": "CreateTicketSteps.OnClickButton()"
});
formatter.result({
  "duration": 36100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Моля въведете заглавие!",
      "offset": 25
    }
  ],
  "location": "CreateTicketSteps.MessageText(String)"
});
formatter.result({
  "duration": 61900,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Липсваща описание на тикета",
  "description": "",
  "id": "createticket-feature;липсваща-описание-на-тикета",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "потребителят отваря прозорец за създаване на тикет",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "потребителят въвежда заглавие \"Проблемче\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "потребителят въвежда дата на проблема \"25.06.2012\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "потребителят въвежда статус на тикета \"Активен\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "потребителят натиска бутон за добавяне",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "вижда съобщение с текст \"Моля въведете описание на тикета!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateTicketSteps.OnOpenWindow()"
});
formatter.result({
  "duration": 81700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Проблемче",
      "offset": 31
    }
  ],
  "location": "CreateTicketSteps.InsertTitle(String)"
});
formatter.result({
  "duration": 81200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25.06.2012",
      "offset": 39
    }
  ],
  "location": "CreateTicketSteps.InsertDate(String)"
});
formatter.result({
  "duration": 45400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Активен",
      "offset": 39
    }
  ],
  "location": "CreateTicketSteps.InsertStatus(String)"
});
formatter.result({
  "duration": 44100,
  "status": "passed"
});
formatter.match({
  "location": "CreateTicketSteps.OnClickButton()"
});
formatter.result({
  "duration": 29900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Моля въведете описание на тикета!",
      "offset": 25
    }
  ],
  "location": "CreateTicketSteps.MessageText(String)"
});
formatter.result({
  "duration": 72000,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Липсваща дата на проблема на тикета",
  "description": "",
  "id": "createticket-feature;липсваща-дата-на-проблема-на-тикета",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "потребителят отваря прозорец за създаване на тикет",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "потребителят въвежда заглавие \"няколко проблема\"",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "потребителят въвежда описание \"мале много проблеми имам описани тук\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "потребителят въвежда статус на тикета \"Активен\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "потребителят натиска бутон за добавяне",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "вижда съобщение с текст \"Моля въведете дата на тикета!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateTicketSteps.OnOpenWindow()"
});
formatter.result({
  "duration": 97000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "няколко проблема",
      "offset": 31
    }
  ],
  "location": "CreateTicketSteps.InsertTitle(String)"
});
formatter.result({
  "duration": 50300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "мале много проблеми имам описани тук",
      "offset": 31
    }
  ],
  "location": "CreateTicketSteps.InsertDescription(String)"
});
formatter.result({
  "duration": 38000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Активен",
      "offset": 39
    }
  ],
  "location": "CreateTicketSteps.InsertStatus(String)"
});
formatter.result({
  "duration": 39400,
  "status": "passed"
});
formatter.match({
  "location": "CreateTicketSteps.OnClickButton()"
});
formatter.result({
  "duration": 23300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Моля въведете дата на тикета!",
      "offset": 25
    }
  ],
  "location": "CreateTicketSteps.MessageText(String)"
});
formatter.result({
  "duration": 835400,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cМоля въведете дата[] на тикета!\u003e but was:\u003cМоля въведете дата[324] на тикета!\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat uni.pu.fmi.Steps.CreateTicketSteps.MessageText(CreateTicketSteps.java:46)\r\n\tat ✽.Then вижда съобщение с текст \"Моля въведете дата на тикета!\"(CreateTicket.feature:35)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 38,
  "name": "Липсващ статус на тикета",
  "description": "",
  "id": "createticket-feature;липсващ-статус-на-тикета",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 39,
  "name": "потребителят отваря прозорец за създаване на тикет",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "потребителят въвежда заглавие \"Тест 15\"",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "потребителят въвежда описание \"Описание 15\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "потребителят въвежда дата на проблема \"15.07.1876\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "потребителят натиска бутон за добавяне",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "вижда съобщение с текст \"Моля въведете статус на тикета!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateTicketSteps.OnOpenWindow()"
});
formatter.result({
  "duration": 73100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Тест 15",
      "offset": 31
    }
  ],
  "location": "CreateTicketSteps.InsertTitle(String)"
});
formatter.result({
  "duration": 91100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Описание 15",
      "offset": 31
    }
  ],
  "location": "CreateTicketSteps.InsertDescription(String)"
});
formatter.result({
  "duration": 75200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15.07.1876",
      "offset": 39
    }
  ],
  "location": "CreateTicketSteps.InsertDate(String)"
});
formatter.result({
  "duration": 64000,
  "status": "passed"
});
formatter.match({
  "location": "CreateTicketSteps.OnClickButton()"
});
formatter.result({
  "duration": 34300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Моля въведете статус на тикета!",
      "offset": 25
    }
  ],
  "location": "CreateTicketSteps.MessageText(String)"
});
formatter.result({
  "duration": 112900,
  "status": "passed"
});
});