import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Menu />
        <h2>Your favorite microblogging platform</h2>
        <img className="logo" src="https://lh3.googleusercontent.com/YyVj5UbhErZkRlbS_M3R03Ddavmr1X86fmcwRE-AeVBTmBLb9A724HJWHvRvaPGPmrcbBtACdc4PVpYv8CdL66f8izagf3rLCO0vn0fwDOxwbZZwJuc2Z5NqDuZFv3pf8TRBYO_3y1U3mh36cFN-c6E7Wo0HEM2fTxRiUdk6agfgj_mAnOKhnTgQ54VpdEGfto5wP4mHG3ubqXZNPySyHraNBDYHG7_fa2BBnV-5_3dt-73wMglBjZvxe-aZIDyz3XQwCTywwhg7SHzAIORcOJzwoCED4HDuLq4FPfuxU-NIgDi8veHOfEv63MfNJ-Xm_MUeikz8f9c8hPHJJWQCDg0sHIqSotf47Zmm5UzCW1ejX3mYXnszWisQuAsXoItHwRo0T5ErHfSgqZCMKHza6MIo-wTHgJ7pSPCIh9zQC_-mkytt_zGWJQdXxPZcLkfo8MbEan4jv74zt22vKIxUn_Da9cJjgCzWEb0BsaXEgbe7llg9ltStHk5VMs5HKYHbWIRv4DGAX6cIs8QHI48vVb5SKD-th2PJQFZjj5kMRDF5WeKfW93uHyrtFdTIGlOzENWAz2XT7qRl7U0-fY9C_UFlfDn_Apn5TxvrSy-rklTWSZYNfXwxBHWWfqJXpRF_wVxqoCFwhcdYo2eSDovAWkfa0TgDQsMbCeKGtk8YjULOnRW7g8jGBYaSmZpD=s225-no?authuser=0"width="150"/>
        <LoginForm />
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
