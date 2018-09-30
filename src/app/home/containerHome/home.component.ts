import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public titleService: Title) {
    titleService.setTitle('iPortpolio(Home)');
    console.log(this.cardOne);
  }
  cardOne = {
    title: 'University',
    first_paragraph: 'I\'m fourth of student at Ho Chi Minh City  University of Information ' +
    'Technology (or UIT) is a member of Vietnam National University - Ho Chi Minh' +
    ' City (VNU-HCM) and is the only university of Vietnam that undertakes information and' +
    ' communication technology research and focused, in-depth training.',
    second_paragraph: 'The University has the youngest management, research and teaching staff of any VNU-HCM member, ' +
    'bringing great enthusiasm along with dynamic and creative advantages  proud ' +
    'to be the only university in Vietnam to specialize in information technology ' +
    'and communications, also focusing on fostering intellectual development.'
  };
  cardTwo = {
    title: 'Hometown',
    first_paragraph: 'The City of Da Lat is the capital of Lam Dong Province and can be found 5000 feet about ' +
    'sea level towards the south of the Central Highlands Region of Vietnam.' +
    ' Surrounded by thousands of pine trees it is home to almost a quarter of ' +
    'a million people. Da Lat has its own weather system, being temperate ' +
    'as apposed to Vietnam’s normally tropical climate. The valleys around ' +
    'the city are often shrouded in mist giving rise to the city’s nickname ' +
    'of City of Eternal Spring',
    second_paragraph: 'The large flower industry here produces Hydrangeas and ' +
    'Strawflowers also known as Golden Everlasting. Strawberries and Mulberries' +
    'are also grown and the local preserve of these and Sweet Potato'
  }

  cardThree = {
    title: 'Hobbies',
    first_paragraph: 'I like photography because it’s a creative hobby and it ' +
    'makes you notice the world around you. I love capturing special' +
    ' moments or unusual or beautiful images, and it’s a great feeling to be able to look back through my pictures' +
    ' and relive different experiences. These memories usually cheer me up' +
    'The last time I took photos on a special occasion was at my friend’s ' +
    'wedding a few weeks ago. I got some great pictures of the bride and' +
    ' groom and their guests celebrating.',
    second_paragraph: 'I can become a composer. I have compose 10 song and published on my SoundClound ' +
    'If you want to following me , feel free to contact me . I  very happy to meet you.'
  }
  ngOnInit() {
  }
}
