import React from "react";
import Arantxa from "../../assets/Arantxa.jpg";

const Aboutme = () => {
  return (
    <section className="section-container">
      <h3>Sobre mi</h3>
      <img
        className="section-container_photo"
        src={Arantxa}
        alt="Una mujer feliz presentándose"
      />
      <p className="section-container_text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas a
        felis in mollis. Ut sit amet viverra mi, eget elementum ipsum. In
        tincidunt bibendum massa eu ullamcorper. Nullam et nisl auctor eros
        iaculis consectetur. Ut nec metus non nisi molestie congue. Aenean
        pretium nisl in turpis pharetra, non tempor eros porta. Mauris fermentum
        arcu ut tortor sodales vestibulum. Nunc mollis ipsum neque, a euismod ex
        interdum a. Phasellus molestie libero placerat ligula interdum, at
        congue ante bibendum. Donec iaculis dolor ac ante pulvinar pharetra.
        Aliquam posuere, sem vitae semper pellentesque, est augue interdum
        augue, at accumsan eros eros id ex. Etiam convallis, nunc a hendrerit
        tempus, eros nisi pulvinar orci, vel cursus orci orci at augue. Aliquam
        sed molestie nisl, ac consectetur metus. Phasellus id turpis lobortis,
        rutrum felis eget, maximus tellus.
      </p>
      <p className="section-container_text">
        Quisque eget quam at urna suscipit pretium ac id libero. In id malesuada
        lacus, pharetra pellentesque quam. Nulla non magna vel sem commodo
        sollicitudin id vel tellus. Integer in metus et nunc aliquet congue.
        Cras varius elementum enim in dapibus. Sed sit amet fermentum arcu, quis
        sagittis purus. Suspendisse feugiat hendrerit neque, in tristique quam
        posuere at. Pellentesque faucibus mollis eros vitae ullamcorper. Morbi
        ut sem lorem. Duis interdum ligula mi, ullamcorper sollicitudin dui
        pharetra porttitor. Aenean eget vestibulum tellus. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla
        facilisi.
      </p>
    </section>
  );
};

export default Aboutme;
