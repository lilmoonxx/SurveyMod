class User {
   constructor(private name:string, private email:string, private role:string, private id:number,
    private profilePic:string){
    this.name=name;
    this.email=email;
    this.role=role;
    this.id=id;
    this.profilePic=""
    }

    public getName(){
        return this.name
    }

    public getEmail(){
        return this.email
    }
    public getIdUser(){
        return this.id
    }

public validateRol(assignedRole:string):boolean{
const typeRoles=["Admin", "User", "Mod", "Guest"]
if(!typeRoles.includes(assignedRole)){
return false;

}

else if(typeRoles.includes(assignedRole))
this.role= assignedRole
return true;
}
    
}