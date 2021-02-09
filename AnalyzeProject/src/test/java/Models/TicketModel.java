package Models;

import java.util.Date;

import Services.CreateTicketService;

public class TicketModel {
	private String name;
	private String category;
	
	//private int id;
    private String date;
    private String status;
    private String description;
    
    private String message;
    
    //methods for opening the window for creating a ticket
    public void OpenWindow() {
    	System.out.println("Моля споделете проблемите си :)");
    }
    //method for clicking the button to finish the whole process
    public void btnClicker() {
    	message = CreateTicketService.ServiceTicket(name,date,status,description);
    }
    
    public String MessageMatch() {
    	return message;
    }
    
    public void setName(String name) {
		this.name = name;
	}
    public void setCategory(String category) {
		this.category = category;
	}
	/*public void setId(int id) {
		this.id = id;
	}*/
	public void setDate(String date) {
		this.date = date;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
    
    

}
