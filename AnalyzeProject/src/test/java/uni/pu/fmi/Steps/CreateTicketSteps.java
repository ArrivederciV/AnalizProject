package uni.pu.fmi.Steps;

import static org.junit.Assert.assertEquals;

import Models.TicketModel;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CreateTicketSteps {

	TicketModel tickets =  new TicketModel();
	
	@Given("^потребителят отваря прозорец за създаване на тикет$")
	public void onOpenWindow() throws Throwable {
	    tickets.OpenWindow();
	}

	@When("^потребителят въвежда заглавие \"([^\"]*)\"$")
	public void insertTitle(String name) throws Throwable {
	    tickets.setName(name);
	}

	@When("^потребителят въвежда описание \"([^\"]*)\"$")
	public void insertDescription(String desc) throws Throwable {
	    tickets.setDescription(desc);
	}

	@When("^потребителят въвежда дата на проблема \"([^\"]*)\"$")
	public void insertDate(String date) throws Throwable {
	    tickets.setDate(date);
	}

	@When("^потребителят въвежда статус на тикета \"([^\"]*)\"$")
	public void insertStatus(String status) throws Throwable {
	    tickets.setStatus(status);
	}

	@When("^потребителят натиска бутон за добавяне$")
	public void onClickButton() throws Throwable {
	    tickets.btnClicker();
	}

	@Then("^вижда съобщение с текст \"([^\"]*)\"$")
	public void messageText(String messagematch) throws Throwable {
	    assertEquals(messagematch, tickets.MessageMatch());
	}
}
