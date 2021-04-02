class Restrict
{
  constructor(A,B)
  {
     var options={
         bodyA:A,
         bodyB:B,
         stiffness:0.5,
         length:20
     }
     this.Restrict=restrict.create(options)
     World.add(world,this.Restrict)
  }
  display()
  {
     line(this.Restrict.bodyA.position.x,this.Restrict.bodyA.position.y,
        this.Restrict.bodyB.position.x,this.Restrict.bodyB.position.y)
  }
}