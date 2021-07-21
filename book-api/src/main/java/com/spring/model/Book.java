package com.spring.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity(name = "Book")
@Table(name = "book")
public class Book {

   @Id
   @GeneratedValue(strategy = GenerationType.SEQUENCE, generator= "CustomerProject")
  	@SequenceGenerator(name="CustomerProject", sequenceName="CustomerProject_S", allocationSize=1)
   @Column(name = "book_id") 
   private int id;
   @Column(name = "title")
   private String title;
   @Column(name = "author")
   private String author;

   public int getId() {
      return id;
   }

   public void setId(int id) {
      this.id = id;
   }

   public String getTitle() {
      return title;
   }

   public void setTitle(String title) {
      this.title = title;
   }

   public String getAuthor() {
      return author;
   }

   public void setAuthor(String author) {
      this.author = author;
   }

}
