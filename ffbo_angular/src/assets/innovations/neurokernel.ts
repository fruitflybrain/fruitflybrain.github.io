import { FFBODescription } from '../../app/ffbo-description'
export const NEUROKERNEL: FFBODescription = {
  title: 'NeuroKernel',
  shortDesc: 'LPU-based circuit Emulation Engine with multi-GPU support.',
  desc: `
    Neurokernel is a groundbreaking open-source platform for the isolated and integrated emulation of fruit fly
    brain model neural circuits (e.g., sensory and locomotion systems), their connectivity patterns, and other
    parts of the fly's nervous system on clusters of GPUs. The Neurokernel project challenges the basic model of
    knowledge creation in neuroscience; it is based on a well-known collaborative model of the IETF based on
    Requests for Comments.
    <br>
    While open-source projects have been proposed in computational neuroscience, they tend to have a monolithic
    structure that continue to lack strong appeal in the neuroscience community. Neurokernel provides standard
    APIs among local processing units (modeling neuropils) and tools to build an architecture from components
    developed by the community of researchers at large. Most importantly, it does not impose a unique computational
    model - rather it allows the existence of many models that can be comparatively evaluated. Neurokernel will
    accelerate the development and integration of new models of neural circuits by providing a model architecture
    upon which researchers can build, share compare, refine and validate models of neuropil compartments,
    constituent circuits and connectivity maps. The ultimate goal of this project is to enable the neuroscience
    community to develop and test, in the near future, the first complete computer model of Drosophila brain.
    <br>
    Neurokernel is open source platform for implementing and simulating on multiple Graphics Processing Units (GPUs),
    neural circuit models of the fly brain, based on electrophysiological recordings, connectome data, biophysical
    analysis etc. The Neurokernel framework a) Enables multiple fly neuroscientists to combine their efforts in modelling
    individual LPUs and tracts by defining a standardized model interfaces that enable communication between LPU models,
    with different internal representation, developed by different groups, b) Provides highly efficient numerical implementations
    of neural components, which target widely available GPU hardware and c) Performs efficient and scalable management of
    multiple GPU resources which means that LPU model developers do not have to worry about how the GPUs to which they have
    access are used.
    <br>
    We call the software framework for fly brain emulation a kernel because it aims to provide two main functions
    associated with traditional computer operating systems 1) resource allocation, enabling the scalable use of
    parallel computing resources to accelerate the execution of an emulation, and 2) act as an extended or virtual
    machine, providing software services and interfaces that can be programmed to emulate and integrate functional
    modules in the fly brain. Neurokernel's architecture consists of three planes that separate between the time
    scales of a model's representation and its execution on multiple parallel processors. This enables the design
    of vertical APIs that permit development of new features within one plane while minimizing the need to modify
    code associated with the other planes. Services that implement the computational primitives and numerical methods
    required to execute supported models on parallel processors are provided by the framework's compute plane.
    Translation or mapping of a models' specified components to the methods provided by the compute plane and management
    of the parallel hardware and data communication resources required to efficiently execute a model is performed by
    Neurokernel's control plane. Finally, the framework's application plane provides support for specification of neural
    circuit models, connectivity patterns, and interfaces that enable independently developed models of the fly brain's
    functional subsystems to be interconnected.
  `,
  url: 'https://neurokernel.github.io/',
  img: 'assets/front-page/img/neurokernel.png',
};
