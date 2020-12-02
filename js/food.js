class Food
{
constructor()
{
  var lastFed,foodS;
  this.button=createButton('addFood');

  this.image=loadImage("images/milk.png")
  }

  update(State)
  {
    database.ref('/').update({
      gameState:State
    });
  }

display()
{
var x=80;
var y=100;

   fill(255,255,254);
   textSize(15);
   imageMode(CENTER);
   this.image(this.image,720,220,70,70);
   this.button.display();


   bedroom()
   {
     background(bedroomImage,550,500);
   }

   gardenImage()
   {
     background(gardenImage,550,500);
   }

   washroom()
   {
     background(washroomImage,550,500);
   }

   if(this.foodS!=0)
   {
     for(var i=0;i<this.foodS;i++)
     {
       if(i%10==0)
       {
         x=80;
         y=y+50;
       }
       image(this.image,x,y,50,50);
       x=x+30;
     }
    }

   if(lastFed>=12)
   {
     text("Last Feed:"+lastFed%12+"PM",350,250);
   }
   else if(LastFed==0)
   {
     text("Last Feed : 12AM",350,350);
   }
   else
   {
    text("Last Feed:"+lastFed+"AM",350,350);
   }
  

  if (gameState!="Hungry")
  {
    feed.hide();
    addFood.hide();
    dog.remove();
  }
  else
  {
    feed.show();
    addFood.show();
    dog.addImage(dogImage);
  }

currentTime=hour()
if(currentTime==(lastFed+1))
{
  update("Playing");
  foodObj.garden();
}
else if(currentTime==(lastFed+2))
{
  this.update("Sleeping");
  foodObj.bedroom();
} 
 else if(currentTime>(lastFed+2)&& currentTime<=(lastFed+4))
 {
   update("Bathing");
   foodObj.washroom();
 }

 else
 {
   update("Hungry");
   foodObj.display();
 }

}
}
