var time = 0;
var centerZ = 0, centerX = 0, x, y, launch = true;

room.onLoad = function()
{
	print("dsadsa")
}

room.update = function()
{
	if(time==500){
	room.objects["meteor1"].pos = Vector(80, 80, -20);
	room.objects["meteor2"].pos = Vector(80, 80, -15);
	room.objects["meteor3"].pos = Vector(80, 85, -40);
	room.objects["meteor4"].pos = Vector(80, 80, -50);
	room.objects["meteor5"].pos = Vector(80, 80, -30);
	launch = false;
	time=0
	}

	room.objects["meteor1"].pos.x += -1; 
	room.objects["meteor1"].pos.z += -1; 
	room.objects["meteor2"].pos.x += -1; 
	room.objects["meteor2"].pos.z += -1; 
	room.objects["meteor3"].pos.x += -1; 
	room.objects["meteor3"].pos.z += -1; 
	room.objects["meteor4"].pos.x += -1; 
	room.objects["meteor4"].pos.z += -1; 
	room.objects["meteor5"].pos.x += -1; 
	room.objects["meteor5"].pos.z += -1; 

	if(launch)
		room.objects["spaceship"].pos.y += 0.025; 
	else {
		room.objects["spaceship"].pos.x += 2;
		room.objects["spaceship"].pos.y += 1;
		room.objects["spaceship"].pos.z += -2; 
	}	
	time++
}
