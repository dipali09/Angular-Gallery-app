import{Injectable} from '@angular/core';

@Injectable()

export class ImageService{
    
    visibleImages=[];
    getImages(){
        return this.visibleImages=images.slice(0);
    }
    getImage(id:number){
        return images.slice(0).find(image=>image.id==id)
    }
}
const images=[
    {"id":1,"category":"girls", "caption":"little girl 1", "url":"../assets/photos/1.jpg"},
    {"id":2,"category":"girls", "caption":"a little girl 2", "url":"../assets/photos/2.jpg"},
    {"id":3,"category":"girls", "caption":"a little girl 3", "url":"../assets/photos/3.jpg"},
    {"id":4,"category":"girls", "caption":"a little girl 4", "url":"../assets/photos/4.jpg"},
    {"id":5,"category":"girls", "caption":"a little girl 5", "url":"../assets/photos/5.png"},
    {"id":6,"category":"abstract", "caption":"abstract 1", "url":"../assets/photos/6.jpg"},
    {"id":7,"category":"abstract", "caption":"abstract 2", "url":"../assets/photos/7.jpg"},
    {"id":8,"category":"abstract", "caption":"abstract 3", "url":"../assets/photos/8.jpg"},
    {"id":9,"category":"abstract", "caption":"aabstract 4", "url":"../assets/photos/9.jpg"},
    {"id":10,"category":"abstract", "caption":"abstract 5", "url":"../assets/photos/10.jpg"}
]