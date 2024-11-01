---
sidebar_position: 11
---
# OS

## Operating Systems

## Course Description

Upon successful completion of the course, the student will be able to:
- **CO1:** Understand the basic components of an Operating System. (BTL 2)
- **CO2:** Apply CPU scheduling and disk scheduling algorithms to achieve specific criteria. (BTL 3)
- **CO3:** Analyze the mechanisms used for process synchronization and handling deadlocks. (BTL 4)
- **CO4:** Analyze virtual memory techniques and secondary storage management techniques. (BTL 4)

## Course Content

### UNIT I: Operating System Structures and Processes

- **Operating-System Structures:**
  - Operating-System Services
  - User and Operating-System Interface
  - System Calls: Examples, Application Programming Interface (API), Types of System Calls, System Services

- **Processes:**
  - Process Concept: The Process, Process State, Process Control Block (PCB)
  - Threads
  - Process Scheduling: Scheduling Queues, CPU Scheduling, Context Switch
  - Operations on Processes: Process Creation, Process Termination
  - Interprocess Communication (IPC): IPC in Shared-Memory Systems, IPC in Message-Passing Systems (Naming, Synchronization, Buffering)

### UNIT II: CPU Scheduling and Process Synchronization

- **CPU Scheduling:**
  - Basic Concepts: CPU-I/O Burst Cycle, CPU Scheduler
  - Preemptive & Non-preemptive Scheduling
  - Dispatcher, Scheduling Criteria
  - Scheduling Algorithms: FCFS, SJF, RR, Priority, Multilevel Queue, Multilevel Feedback Queue Scheduling
  - Multiple-Processor Scheduling: Approaches, Multicore Processors, Load Balancing, Processor Affinity, Heterogeneous Multiprocessing
  - Real-Time CPU Scheduling: Minimizing Latency, Priority-Based, Rate-Monotonic, Earliest-Deadline-First, Proportional Share Scheduling

- **Process Synchronization:**
  - Background: The Critical-Section Problem
  - Peterson’s Solution
  - Hardware Support for Synchronization
  - Mutex Locks, Semaphores: Usage, Implementation
  - Monitors: Usage, Implementing with Semaphores
  - Classic Problems of Synchronization: The Bounded-Buffer Problem, The Readers-Writers Problem, The Dining-Philosophers Problem

### UNIT III: Deadlocks and Memory Management

- **Deadlocks:**
  - System Model
  - Deadlock in Multithreaded Applications: Livelock
  - Deadlock Characterization: Necessary Conditions, Resource-Allocation Graph
  - Methods for Handling Deadlocks: Deadlock Prevention, Deadlock Avoidance, Deadlock Detection
  - Recovery from Deadlock: Process and Thread Termination, Resource Preemption

- **Main Memory:**
  - Background: Basic Hardware, Address Binding
  - Logical vs Physical Address Space
  - Dynamic Loading, Dynamic Linking & Shared Libraries
  - Contiguous Memory Allocation: Memory Protection, Allocation, Fragmentation
  - Paging: Basic Method, Hardware Support, Protection, Shared Pages
  - Structure of the Page Table: Hierarchical, Hashed Page Tables, Inverted Page Tables
  - Swapping: Standard Swapping, Swapping with Paging, Swapping on Mobile Systems

## Tools and Libraries

- **Operating System Simulators**
- **Memory Management Tools**

## Professor

- G.Sravanthi

## Links

- [Lecture Notes](#)
- [Assignment Repository](#)

**Tags:** Operating Systems, CPU Scheduling, Process Synchronization, Deadlocks, Virtual Memory, Paging