package uni.pu.fmi;

import java.util.*;

/**
 * 
 */
public class User {

    /**
     * Default constructor
     */
    public User() {
    }

    private int userid;
    private String username;
    private String password;
    private String email;
    private int age;
    //public Tickets Answer to;
    public Tickets create;
    
    public int getIUserID() {
        return userid;
    }

    public void setUserID(int Id) {
        this.userid = Id;
    }
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username =username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
    	this.email = email;
    }
    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }

}