# TODO LIST
- Allow selection of cluster type for standard partition (--constraint=rivanna does not work)
- Cryosparc form not updated

# Relevant Documentation
- form.yml : https://osc.github.io/ood-documentation/latest/how-tos/app-development/interactive/form.html
- submit.yml.erb : https://osc.github.io/ood-documentation/latest/how-tos/app-development/interactive/submit.html
- Original Interactive Apps Forms: https://github.com/uvarc/ood_interactive_apps
# Changes to Interactive Apps
Changes were made to 
- Disallow invalid amounts of cores / memory to be submitted as a job
- Allow memory per cpu option
- Update GPU types to all available GPUs
- Allow GPU type to be specified for interactive partitions
- Allow multiple lines of code for additonal options
```form.yml
#form.yml
#Comments will be placed on changes made to original form

# Order of which questions (attributes) appear on form
form:
  - version
  - modules
  - node_type 
  #- bc_num_slots
  - bc_num_hours
  - num_cores
  - mem_type #Memory per core / memory overall
  - node_num_memory #Memory per node
  - core_num_memory #Memory per core
  - bc_account
  - gpu_type
  - num_gpu
  - gpu_type_interactive #Enable GPU type for interactive partition
  - interactive_options #Specify GPU type for interactive partitions
  - num_gpu_interactive #Specify number of GPUs, for interactive partitions
  - mode
  - option
  - extra_group
  - bc_email_on_started

#All attributes listed here were added or modified
attributes:
  mem_type: #Added memory type selection for either memory per node or memory per core
    widget: select
    label: "Memory type"
    options:
      - [ "Memory per node", "nodememory", data-hide-core-num-memory: true]
      - [ "Memory per core", "corememory", data-hide-node-num-memory: true]
  node_num_memory: #Respective memory per node input
    widget: "number_field"
    label: "Memory Request in GB ( maximum 384G total )"
    value: 6
    min: 6
    max: 384
    step: 1
  core_num_memory: #Respective memory per core input
    widget: "number_field"
    label: "Memory Request in GB ( maximum 384G total )"
    value: 1
    min: 1
    max: 16
    step: 1  

  node_type: #Changed max cores and max memory depending on partition type and memory type selection
    widget: select
    label: "Rivanna/Afton Partition"
    options:
      - [ "Interactive", "interactive", data-hide-gpu-type: true, data-hide-num-gpu: true, data-max-num-cores: 24, data-max-core-num-memory: 16]
      - [ "Standard", "standard", data-hide-gpu-type: true, data-hide-num-gpu: true, data-hide-gpu-type-interactive: true, data-hide-num-gpu-interactive: true, data-max-num-cores: 40, data-max-core-num-memory: 9, data-hide-interactive-options: true]
      - [ "GPU", "gpu", data-hide-gpu-type-interactive: true, data-hide-num-gpu-interactive: true, data-max-num-cores: 28, data-max-core-num-memory: 13, data-hide-interactive-options: true]
      - [ "BII", "bii", data-hide-gpu-type: true, data-hide-num-gpu: true, data-hide-gpu-type-interactive: true, data-hide-num-gpu-interactive: true, data-max-num-cores: 40, data-max-core-num-memory: 9, data-hide-interactive-options: true]
      - [ "BII-GPU", "bii-gpu", data-hide-gpu-type-interactive: true, data-hide-num-gpu-interactive: true, data-max-num-cores: 40, data-max-core-num-memory: 9, data-hide-interactive-options: true]
    help: |
      - **Interactive** - (*1-24 core*) Rivanna node in the interactive partition.
      - **Standard** - (*1-40 cores*) Rivanna node in the standard partition.
      - **GPU** - (*1-28 cores*) Rivanna node that has NVIDIA GPU.
      - **Bii,Bii-gpu** - (*1-40 cores*) Partition for Biocomplexity Institute and Initiative.
      - **Learn More** - [Rivanna Queuing Policies]

      [Rivanna Queuing Policies]: https://www.rc.virginia.edu/userinfo/rivanna/queues/
  gpu_type: #Updated to all GPUs available
    widget: select
    label: "Optional: GPU type for GPU partition"
    options:
      - [ "default",     "--gres=gpu:"     ]
      - [ "NVIDIA A100",     "--gres=gpu:a100:"     ]
      - [ "NVIDIA A100 40GB",     "--gres=gpu:a100:"     ]
      - [ "NVIDIA A100 80GB",     "--gres=gpu:a100:"     ]
      - [ "NVIDIA A6000",     "--gres=gpu:a6000:"     ]
      - [ "NVIDIA V100",     "--gres=gpu:v100:"     ]
      - [ "NVIDIA A40",     "--gres=gpu:a40:"     ]
      - [ "GPUPOD",     "--gres=gpu:"     ]
  
  interactive_options: #Allowed specification of GPU type for interactive partition
    widget: select
    label: "Optional: GPU type"
    options:
      - [ "default",     "--gres=gpu:"     ]
      - [ "RTX 2080",     "--gres=gpu:rtx2080:"     ]
      - [ "RTX 3090",     "--gres=gpu:rtx3090:"     ]
      
  gpu_type_interactive: #Updated hide values
    widget: select
    label: "Optional: GPU for Interactive partition"
    options:
      - ["No", "No", data-hide-num-gpu-interactive: true, data-hide-interactive-options: true]
      - ["Yes", "Yes" ]

  option: #Updated textbox to allow multiple lines
    label: "Optional: Slurm Option ( Reservation, Constraint )"
    widget: text_area
```
```submit.yml.erb
#submit.yml.erb
#Commented for changes made
#This line hasn't been tested

script:
  queue_name: "<%= node_type %>"
  native:
    - "-J"
    - "ood_matlab"
    - "-N"
    - "1"
    <%- unless node_type == "dev" -%>
    - "--cpus-per-task"
    - "<%= num_cores %>"
    #Script for memory per node
    <%- if mem_type == "nodememory" -%> 
    - "--mem"
    - "<%= node_num_memory %>G"
    <%- end -%>
    <%- end -%>

    #Script for memory per core
    <%- if mem_type == "corememory" -%>
    - "--mem-per-cpu"
    - "<%= core_num_memory %>G"
    <%- end -%>

    - "--output=matlab_open_ondemand.log"

    <%- if node_type == "gpu" or node_type == "bii-gpu" -%>
    - "<%= gpu_type %><%= num_gpu%>"
    <%- end -%>

    #Script for gpu configurations that are constraints
    <%- if gpu_type == "NVIDIA A100 40GB" -%>
    - "--constraint=40gb"
    <%- end -%>
    <%- if gpu_type == "NVIDIA A100 80GB" -%>
    - "--constraint=80gb"
    <%- end -%>
    <%- if gpu_type == "GPUPOD" -%>
    - "--constraint=gpupod"
    <%- end -%>

    #Script for gpu selection in an interactive partition
    <%- if node_type == "interactive" and gpu_type_interactive == "Yes" -%>
    - "<%= interactive_options%><%= num_gpu_interactive%>"
    <%- end -%>

    #Script for reading multiple lines for contstratins / additional options
    <%- unless option.strip.empty? -%>
      <%- option.each_line do |line| -%>
    - "<%= line.strip %>"
      <%- end -%>
    <%- end -%>

```
