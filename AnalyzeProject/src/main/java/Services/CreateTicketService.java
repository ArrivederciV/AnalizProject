package Services;

public class CreateTicketService {

	
	public static String ServiceTicket(String name, String date, String status, String description) {
		if(name == null) {
			return "Моля въведете заглавие!";
		}
		
		if(date == null) {
			return "Моля въведете дата на тикета!";
		}
		
		if(status == null) {
			return "Моля въведете статус на тикета!";
		}
		
		if(description == null) {
			return "Моля въведете описание на тикета!";
		}
		
		return "Заявката е успешно регистрирана!";
	}
}
