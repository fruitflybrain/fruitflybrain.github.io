import { FFBODescription } from '../../app/ffbo-description'
export const NEURONLP: FFBODescription = {
  title: 'NeuroNLP',
  shortDesc: 'Modern web-based portal for navigating fruit fly brain circuit data.',
  desc: `
    NeuroNLP provides a modern web-based portal for navigating fruit fly brain circuit data.
    Increases in the availability and scale of fruit fly connectome data, demand new, scalable
    and accessible methods to facilitate investigation into the functions of the latest complex
    circuits being uncovered. NeuroNLP enables in-depth exploration and investigation of the
    structure of brain circuits, using intuitive natural language queries that are capable of
    revealing the latent structure and information, obscured due to expansive yet independent
    data sources.
    <br>
    NeuroNLP is built on top of a database system call NeuroArch that codifies knowledge about
    the fruit fly brain circuits, spanning multiple sources. Users can probe biological circuits
    in the NeuroArch database with plain English queries, such as “show glutamatergic local
    neurons in the left antennal lobe” and “show neurons with dendrites in the left mushroom
    body and axons in the fan-shaped body”. This simple yet powerful interface replaces the
    usual, cumbersome checkboxes and dropdown menus prevalent in today’s neurobiological databases.
    <br>
    Equipped with powerful 3D visualization, NeuroNLP standardizes tools and methods for
    graphical rendering, representation, and manipulation of brain circuits, while integrating
    with existing databases such as the FlyCircuit. The user-friendly graphical user interface
    complements the natural language queries with additional controls for exploring the
    connectivity of neurons and neural circuits. Designed with an open-source, modular
    structure, it is highly scalable/flexible/extensible to additional databases or to
    switch between databases and supports the creation of additional parsers for other
    languages. By supporting access through a web browser from any modern laptop or
    smartphone, NeuroNLP significantly increases the accessibility of fruit fly brain
    data and improves the impact of the data in both scientific and educational exploration.
  `,
  url: 'http://www.biorxiv.org/content/biorxiv/early/2016/12/14/092429.full.pdf',
  publication:'https://doi.org/10.1101/092429',
  img: 'assets/front-page/img/neuronlp.jpg'
};
