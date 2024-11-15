import React from "react";

const Header = () => {
  return (
    <header className="header">
      Search
      <div className="header-wrapper">
        FileUpLoader
        <form>
          <Button type="submit" className="sign-out-button">
            Submit
          </Button>
        </form>
      </div>
    </header>
  );
};

export default Header;
