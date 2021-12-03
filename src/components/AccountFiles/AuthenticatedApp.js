import Homepage from './HomePage'
import React from "react";
import {Switch, Route} from 'react-router-dom'

export default function AuthenticatedApp(currentUser, setCurrentUser) {
  return (
    <div>
      <Switch>
        <Route exact path="/homepage">
          <Homepage currentUser={currentUser} />
        </Route>
        {/* <Route exact path="/profileedit">
          <ProfileEdit
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
          />
        </Route>
        <Route exact path="/reviews">
          <Reviews currentUser={currentUser} />
        </Route>
        <Route exact path="/unitedit">
          <UnitPage
            currentUser={currentUser}
            shelters={shelters}
            setChosenMove={setChosenMove}
          />
        </Route>
        <Route exact path="/sheltermove">
          <Move
            currentUser={currentUser}
            shelters={shelters}
            setChosenMove={setChosenMove}
          />
        </Route>
        <Route exact path="/leadermove">
          <LeaderMove currentUser={currentUser} shelters={shelters} />
        </Route> */}
      </Switch>
    </div>
  );
}
