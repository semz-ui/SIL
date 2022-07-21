import React, { useState } from "react";

function Header() {
  const [user, setUser] = useState("Mike");
  return (
    <div>
      <h2>Header</h2>
      <nav>Welcome</nav>
    </div>
  );
}

export default Header;
