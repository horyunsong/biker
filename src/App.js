import React, { Component } from 'react';
import logo from './logo.svg';
import map from './img/analysis/map.png';
import survey from './img/analysis/survey.jpg';
import note from './img/analysis/note.jpeg';
import note2 from './img/analysis/note2.jpeg';
import gopro from './img/analysis/gopro.png';
import gopro2 from './img/analysis/gopro2.png';
import affinity from './img/analysis/affinity.jpeg';
import feasibility from './img/analysis/feasibility.jpg';
import bubble from './img/design/bubble.jpeg';
import bubbles from './img/design/bubbles.png';
import sensor from './img/design/sensor.jpeg';
import sensors from './img/design/sensors.png';
import magnet1 from './img/design/magnet1.png';
import magnet2 from './img/design/magnet2.png';
import magnet3 from './img/design/magnet3.png';
import magnets from './img/design/magnets.png';
import ulock from './img/design/ulock.jpg';
import poles from './img/design/poles.jpg';
import map1 from './img/design/map1.png';
import map2 from './img/design/map2.png';
import map3 from './img/design/map3.png';
import pilot from './img/design/pilot.jpg';
import requirements from './img/design/requirements.png';

import './App.css';
import './Portfolio.css';

import Index from "./pages/index/Index";
import UserGroup from "./pages/components/UserGroup"
import Methods from "./pages/components/Methods";
import Analysis from "./pages/components/Analysis";
import Design from "./pages/components/Design";

class App extends Component {
  render() {
    return (
      <div className="Portfolio">
        <h3 className="center method-title">Bike Storage & Safety</h3>
        <h5 className="center default-title">Victoria Chai, Kristin Hare, <b>Horyun Song</b>, Bradlyn Walker</h5>
        <UserGroup
          title="Cyclists across Georgia Tech campus"
          area="Challenges with storage on campus"
          space="Even though there are designated bike parking racks, it is hard to find empty rack near busy places like Clough Commons (CULC) and Student Center. If Student cyclists cannot find space, they are unlikely to travel to another bike rack at a different building but creatively lock their bikes to railings, lamp posts, garbage cans and even chairs. Locking bikes to these undesignated area can impede walkways and make it easier for bike thieves to take the bikes. "
        />
        <hr/>
        <div className="timeline">
          <Methods
            title="Unstructured Interview with Georgia Tech Police Department (stakeholder, count:3)"
            reasoning="GTPD have the most accurate perspective of the actual breadth of student and bicycle safety"
            how="Interviewed with two police officers and one crime analyst"
            outcome="Learned about the prevalence of bicycle theft on Georgia Tech’s campus, including reasons for theft, locations of frequent theft, bike registration, crime prevention implementations, and ways to locate stolen bicycles"
          />
          <img src={map} className="img-rounded sample-img" />
          <Analysis
            title="Notes & Discussion"
            list="Notes from unstructured interview with GTPD"
            analysis="We did not perform a formal analysis on this data as it was mainly used to gain a broad understanding of the problem space relating to safety and cycling on campus. We found that bicycle theft was prevalent and a main concern from GTPD."
          />
          <div className="row">
            <div className="col-sm-6">
              <img src={note} className="img-rounded img-100"/>
            </div>
            <div className="col-sm-6">
              <img src={note2} className="img-rounded img-100"/>
            </div>
          </div>
          <Methods
            title="In-person survey with student cyclists (user) at bike racks (count: 25)"
            reasoning="Rather than distributing online survey or conducting formal interviews, we conducted quick and dirty in-person surveys that led to mini interview sessions when students wanted to elaborate their answer or we found the answer interesting."
            how="Asked students to rank their feelings on a 1-5 Likert scale, 1 being not at all safe, and 5 being very safe to understand how students felt for each question."
            outcome="Surprisingly, we found that only 4 out of 25 students surveyed thought that bike theft was an issue on campus. 6 out of 25 students had or knew of someone who had a bike stolen in the past year. But they answered that traffic (both cars and pedestrian) safety and storage were big issue on campus."
          />
          <img src={survey} className="img-rounded sample-img" />
          <Methods
            title="Semi-structured interview with student cyclists (count: 10)"
            reasoning="To better understand student cyclists’ perception about storage and traffic safety"
            how="30 minute interview, in coffee shops or campus lounges. We asked same questions across all interviewees and prepared number of special questions for those who had experienced personal bike theft."
            outcome="Students still cared more about traffic safety and bicycle storage rather than bike theft.  Even those students who had their bikes stolen seemed to perceive safety in terms of maneuvering around traffic as well as keeping bikes stored safely."
          />
          <Analysis
            title="Data coding"
            list="Survey answers and interview scripts"
            analysis="A few common themes emerged from users when asked questions about perceived safety and storage methods. Coding this data into a spreadsheet allowed us to highlight common themes easily as well as their magnitude."
          />
          <Methods
            title="Contextual interview: “Think-aloud” with GoPro (count: 3)"
            reasoning="We wished to experience what a student biker thought, felt, and did while riding a bike, but we thought it would be impractical to run next to a bike and potentially dangerous to cycle next to the bike."
            how="Asked student cyclists to wear a GoPro attached to a helmet as they rode their bike on campus during a normal day while using the “think-aloud” technique."
            outcome="They were very alert when they were driving near pedestrians and cars. And they let out exasperated sighs when they could not find empty rack near by their buildings. Also, though no one has mentioned it in survey and interviews, they found it very frustrating when they had to unlock the bike from crowded and tangled bike racks."
          />
          <div className="row">
            <div className="col-sm-6">
              <img src={gopro} className="img-rounded img-100"/>
            </div>
            <div className="col-sm-6">
              <img src={gopro2} className="img-rounded img-100"/>
            </div>
          </div>
          <Analysis
            title="Affinity diagraming"
            list="Survey answers, interview scripts and contextual insights"
            analysis="Excerpts from our various data collections were coded on sticky notes then placed on a wall where they were able to be rearranged based on similarity and power of other related excerpts. It aided us in taking our ideas from several “strands” of general thoughts to more dedicated and tangible clusters."
          />
          <img src={affinity} className="img-rounded large-img" />
          <Analysis
            title="Narrowing down problem area"
            list="Affinity diagram results and data codes"
            analysis="The general themes we saw were related to difficulties maneuvering in traffic, storage redesign, prevention and subversion of theft, and lack of confidence in GTPD processes. For maneuvering difficulties, there was similar frequency of concern for both pedestrians and cars as well as interest in improving existing infrastructure. For storage, users were interested in seeing a modification to the currently existing bike racks as well as possible indoor storage of some kind. Users also were very familiar with U-Locks and were cited as the main form of theft prevention employed by users while on campus. This seems to be the primary form of prevention as sentiment towards the ability of GTPD to either prevent bike theft or recover stolen bikes seemed negative or neutral. It was either too inconvenient to register bikes/inquire about a stolen bike or users did not feel that it was worth it. Overall, this let us solidify our problem space down to a few avenues and ideas worth pursuing further. We decided to focus on two possible problem areas, maneuvering in traffic and storage redesign, while not completely disregarding prevention and subversion of theft and lack of confidence in GTPD processes."
          />
          <Design
            title="Quick & dirty design concepts"
            description="We brainstormed at least twenty different ideas on sticky notes. We each placed our own ideas onto a whiteboard to create a diagram based on Feasibility vs. Usability. The purpose of this diagram was to help us define which ideas were not only the most useful to our user group, but also the most practical to implement."
          />
          <img src={feasibility} className="img-rounded large-img" />
          <Design
            title="3 concepts : Biker Bubble"
            description="The Biker Bubble exists as a protection for the biker. Initially, we wanted a total enclosement. However, after looking at it further, we thought it may be a good idea to have the bubble on an as-needed basis. Whenever a pedestrian or car gets too close to the biker, the biker can throw out a soft punching glove to gently tap the car or person. This serves as a notification to those around the biker that there is a cyclist nearby, creating awareness of bikers. It will also keep bikers safe as it will make certain that cars and pedestrians do not infringe too much on their biking space."
          />
          <div className="row">
            <div className="col-sm-5 col-xs-12">
              <img src={bubble} className="img-rounded img-100"/>
              <p className="center"><i>Design Sketch</i></p>
            </div>
            <div className="col-sm-7 col-xs-12">
              <img src={bubbles} className="img-rounded img-100"/>
              <p className="center"><i>Storyboard</i></p>
            </div>
          </div>
          <Design
            title="3 concepts : Traffic Sensor"
            description="While a cyclist is riding his or her bike, a sensor will be used to alert pedestrians and cars that a bicycle is approaching. This sensor will use sound, light, or a combination of both to tell cars that a cyclist is advancing from behind. The same sensor will tell pedestrians that a bicycle is approaching from the back left and suggest that the students should move to the right. This sensor may be attached to the bike or it may be an innate part of the bicycle itself."
          />
          <div className="row">
            <div className="col-sm-5 col-xs-12">
              <img src={sensor} className="img-rounded img-100"/>
              <p className="center"><i>Design Sketch</i></p>
            </div>
            <div className="col-sm-7 col-xs-12">
              <img src={sensors} className="img-rounded img-100"/>
              <p className="center"><i>Storyboard</i></p>
            </div>
          </div>
          <Design
            title="3 concepts : Modular Bike Storage"
            description="The Modular Bike Storage serves the goal of increasing bicycle storage around campus without obstructing foot traffic. It consists of two components. First, there is a strong, circular magnet that is implanted into the ground. Because it is below ground level, it will not impede pedestrians’ current walkways. Second, there will be a lock that is connected to the bike (similar to a futuristic U-lock). Bikers will be able to ride their bikes up to one of the circular magnets in the ground, and by using an app, will be able to secure the lock on their bike to the magnet on the ground. When they need to unlock the bike, they will simply unlock it using their phones or Buzzcards. When the locks are not in use, the bike rack will appear as a normal sidewalk without any protruding locks or racks that could obstruct pedestrian walking paths."
          />
          <div className="row">
            <div className="col-sm-4 col-xs-12">
              <img src={magnet1} className="img-rounded img-100"/>
              <p>Main app screens: left screen is when the bike is locked. The user will have to select “Unlock” button in order to unlock their bike. The right screen is for when user is looking for an available spot. Users can select “Lock” and their bicycle lock will be secured to the ground lock.</p>
            </div>
            <div className="col-sm-4 col-xs-12">
              <img src={magnet2} className="img-rounded img-100"/>
              <p>These are the lock spaces that will be secured to the ground. Spaces will be clearly labeled. The left and right rectangles are the brackets to insert the bike.</p>
            </div>
            <div className="col-sm-4 col-xs-12">
              <img src={magnet3} className="img-rounded img-100"/>
              <p>This is a lock concept that will attach to the lowest point of the bike frame for stability and security. It resembles a U-lock but will be lighter and stronger than current U-locks on the market.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-8 col-sm-offset-2 col-xs-12">
              <img src={magnets} className="img-rounded img-100"/>
              <p className="center"><i>Storyboard</i></p>
            </div>
          </div>
          <Methods
            title="Design sprint"
            reasoning="Feedback from fellow researchers is insgihful and can address the problems we have missed"
            how="Give short explanation of each three design concepts and get feedback"
            outcome="Based on the feedback, we decided to explore the idea of modular storage further. We came up with detailed concept sketches to determine the physical structure and requirements to vision digital interaction of paired application."
          />
          <Methods
            title="Asking the experts (count: 4)"
            reasoning="To get an insight on how the bikers would perceive our designs, if it is possible to implement it on bikes structure"
            how="Interviewed three experts (1. researcher on cyclists in Atlanta; 2. landscape architect at space management; 3. staff member at GT Starter Bike; 4. staff member at Performance Bike in Atlanta) with our preliminary designs and asked for their opinions"
            outcome="Experts gave insight on the structure of bike, what is possible and impossible, as well as the modular storage implementation issues."
          />
          <Analysis
            title="Design decision"
            list="Feedback from design sprint and experts"
            analysis="Similar issues rose from both groups of students and experts from various departments. One of the student cyclists and three of experts mentioned some bikes do not come have kickstand and rely on bike rack to stand. It limited our design decision to make the lock design smaller and lighter. Then, we designed kickstand-like lock at lower frame where the pedals are attached. However, another expert pointed out how it can be easily unscrewed. Using strong electromagnet was also eliminated because landscape architecture mentioned that its potential danger for people with pacemaker and other devices in their bodies."
          />
          <Design
            title="Modular bike storage detailed design"
            description="We came up with several possible designs and narrowed down to two lock structures. Other designs were scraped based on the previous analysis and our design decision to integrate this to the real world as much as possible."
          />
          <div className="row">
            <div className="col-sm-12 col-xs-12">
              <img src={ulock} className="img-rounded img-100"/>
              <p className="center"><i>U-lock integrated</i></p>
            </div>
            <div className="col-sm-12 col-xs-12">
              <img src={poles} className="img-rounded img-100"/>
              <p className="center"><i>Poles popping out</i></p>
            </div>
          </div>
          <Analysis
            title="Requirement generating"
            list="Interview answers, contextual insights and non-structured impromptu interview"
            analysis="We went back to interview answers and contextual insights to generate requirements for smart lock interaction. When we needed to ask questions that were not answered in previous interviews, we asked friends who are student cyclists for quick questioning. We divided the requirements into three timings to clarify what kind of interaction the user would need to achieve and information the user would want. "
          />
          <div className="row">
            <div className="col-sm-12 col-xs-12">
              <img src={requirements} className="img-rounded img-100"/>
              <p className="center"><i>Requirement table</i></p>
            </div>
          </div>
          <Design
            title="App wireframe"
            description="Based on the requirements, we designed rough wireframe to integrate to smart storage."
          />
          <div className="row">
            <div className="col-sm-4 col-xs-12">
              <img src={map1} className="img-rounded img-100"/>
              <p className="center"><i>Bike rack availability map</i></p>
            </div>
            <div className="col-sm-4 col-xs-12">
              <img src={map2} className="img-rounded img-100"/>
              <p className="center"><i>List of empty racks</i></p>
            </div>
            <div className="col-sm-4 col-xs-12">
              <img src={map3} className="img-rounded img-100"/>
              <p className="center"><i>Locked screen with map</i></p>
            </div>
          </div>
          <Methods
            title="Pilot testing"
            reasoning="We were indecisive on two matters — structure of rack and unlocking method. For structures, we saw benefits of double U-lock working as regular lock away from smart rack and popping pole as no need to carry a heavy lock. Also, how to unlock —buzzcard, fingerprint, and app—needed more research on this specific area."
            how="Asked the user to use two physical prototypes and one interactive app prototype where the user usually parks the bike"
            outcome="He was satisfied how easy the system was. However there were not enough signifiers, instructions and information given. He was particularly delighted to find that the if he uses popping pole prototype, he didn’t need to carry heavy U-lock and keys. He mentioned that both physical prototypes were not scaled correctly. The popping poles were too small and integrated U-lock was too long. Regarding app, he said that he was not sure why there was close-up view of racks. He said just the list of available locks was enough because all he wants to know is whether it is available or not. He appreciated that it would notify him after certain time because sometimes he forgets that he biked to campus and just walks home without bike. Regarding this, he wanted to specify the timing of notification."
          />
          <div className="row">
            <div className="col-sm-8 col-sm-offset-2 col-xs-12">
              <img src={pilot} className="img-rounded img-100"/>
              <p className="center"><i>User testing prototype</i></p>
            </div>
          </div>
          <Analysis
            title="Reflect on pilot testing"
            list="Observation data and interview answers from pilot testing"
            analysis="Working in progress..."
          />
        </div>
      </div>
    );
  }
}

export default App;
