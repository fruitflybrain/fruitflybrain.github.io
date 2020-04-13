import { FFBODescription } from '../../app/front-page/ffbo-description'
export const OVERVIEW: FFBODescription = {
  title: 'Overview',
  mainText: [
    'Despite significant investment and huge progress in understanding Drosophila neural circuits and',
    'the availability of excellent genomic and genetic community databases, a major obstacle in understanding',
    'the fly brain is the lack of communication/collaboration across the modeling community as well as lack of',
    'shared models, modeling tools and data repositories. Vast amounts of experimental data that have been',
    'generated by labs around the world, have yet to be distilled into new models or used to validate and refine',
    'existing models. Knowledge and information of the detailed neuroanatomy, neuron connectivity and gene',
    'expression of the adult Drosophila melanogaster brain has been made publicly available thanks to earlier',
    'pioneering efforts. What the community is still missing is an open source, modular software platform for',
    'accelerated model development, simulation, sharing and review, which ultimately is capable of simulating',
    'efficiently a complete model of the fly brain.',
    '\n',
    'At the Fruit Fly Brain Observatory (FFBO), our mission is to leverage the smaller but sufficiently complex',
    'brain of the fruit fly for investigating the mechanisms of human neurological and psychiatric disorders,',
    'such as Epilepsy or Parkinson`s disease, at molecular, cellular and circuit levels. The FFBO is an open',
    'source software platform that',
    '\n',
    '<ul>',
    '<li>stores and processes data related to the neural circuits of the fly brain including location, morphology, connectivity and biophysical properties of every neuron,</li>',
    '<li>seamlessly integrates the structural and genetic data from multiple sources that can be queried, visualized and interpreted,</li>',
    '<li>automatically generates models of the fly brain that can be simulated efficiently using multiple Graphics Processing Units (GPUs) to help elucidate the mechanisms of human neurological disorders and identify drug targets.</li>',
    '</ul>'
  ].join(''),
  url: 'https://www.biorxiv.org/content/biorxiv/early/2016/12/14/092288.full.pdf',
  publication: 'https://doi.org/10.1101/092288',
  slides: 'http://fruitflybrain.org/docs/FFBO_overview_slides.pdf'
}
