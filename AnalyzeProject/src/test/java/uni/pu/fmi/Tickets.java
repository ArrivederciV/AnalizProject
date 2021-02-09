package uni.pu.fmi;
import java.util.*;

public class Tickets {
    public Tickets() {
    }
    private String name;
    private int id;
    private String date;
    private String status;
    private String description;
    //private String category;

    /*public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}*/

	public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
        return;
    }

    public int getID() {
     
        return id;
    }

    public void setID(int Id) {
        this.id = Id;
        return;
    }

    public String getDate() {
    	return date;
    }

    public void setDate(String Date) {
        this.date = Date;
        return;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
    	this.status = status;
    	return;
    }
    
    public String getDesc() {
        return description;
    }

    public void setDesc(String description) {
        this.description = description;
        return;
    }

}