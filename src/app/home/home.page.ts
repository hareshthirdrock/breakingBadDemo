import { Component, ViewChild } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { DetailsPage } from '../details/details.page';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  
  @ViewChild('popover') popover;
  isOpen = false;
  searchValue: string;
  filterValue: number;

  filterArr:any = [1,2,3,4,5]

  list: any;
  copyList: any;
  public isLoading:boolean=false;

  imageList:any = [
    "../../assets/breakingbad.jpg","../../assets/breakingbad2.jpg"
  ]

  slideOpts = {
    speed:400,
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: {
      disableOnInteraction: false
    },
  };

  constructor(private authService: AuthService,
    public loadingController: LoadingController,
    private modalCtrl: ModalController) {
      // this.showloading();
  }

  ngOnInit(){
    
    this.getlist();
  }

  getlist() {
    this.isLoading=true;
    this.authService.get().subscribe((res: any) => {
      
      if (res) {
        this.list = res;
        this.copyList = res;
        console.log(this.list)
        this.isLoading=false;
 
      }
    }, err => {
      
      console.log('Error  in API')
      this.isLoading=false;
    })
  }

  search(event) {
    if (event.target && event.target.value) {
      this.searchValue=event.target.value.toLowerCase();
      event.target.value=event.target.value.toLowerCase()
      if (this.filterValue) {
          this.filterNameWithAppearence(event.target.value);
      } else {
        this.filterName(event.target.value);
      }
    } else {
      this.searchValue=null
      if(this.filterValue){
        this.filterAppearence();
      }else{
      this.list = this.copyList
      }
    }

  }

  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }

  getFilterValue(value) {
    this.isOpen = false
    console.log('get Value', value);
    this.filterValue = value;
    if (this.filterValue) {
      if (this.searchValue) {
        this.filterNameWithAppearence(this.searchValue);
      } else {
        this.filterAppearence();
      }
    } else {
      if (this.searchValue) {
        this.filterName(this.searchValue)
      } else {
        this.list = this.copyList
      }
    }

  }

  filterName(value){
    this.list = this.copyList.filter(x => (x.name.toLowerCase()).includes(value))
  }


  filterAppearence(){
    this.list = this.copyList.filter(x => x.appearance.includes(this.filterValue))
  }

  filterNameWithAppearence(value){
   this.list = this.copyList.filter(x => ((x.name.toLowerCase()).includes(value) && x.appearance.includes(this.filterValue)))
  }

  async presentModal(item) {
    //const mySubject = new BehaviorSubject();
    const dismissFirstModal = () => {
      modal.dismiss();
    };

    const modal = await this.modalCtrl.create({
     
      component: DetailsPage,
      breakpoints: [0],
      handle: false,
      componentProps: {
        dismissFirstModal: dismissFirstModal,
        item
      },
    });
    await modal.present();

    // mySubject.subscribe((value: string) => {

    // });

    // modal.onDidDismiss().then((_ => {
    //   mySubject.unsubscribe();
    // }));
  }
}

