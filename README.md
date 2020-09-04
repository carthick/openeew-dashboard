# OpenEEW Dashboard

The OpenEEW Dashboard is a web application currently being developed by the OpenEEW community for the purpose of managing network sensors and visualizing real time sensor data. 

Currently, the project consists of:
- A React application that displays a dashboard and renders raw acceleration data in near real time using [IBM's Carbon Design System](https://www.carbondesignsystem.com) and [D3](https://github.com/d3/d3)
- A simple GraphQL server that mocks the delivery of the acceleration data
- Design documents that catalogue future plans for the project
- Grafana dashboards that provide sensor visualizations, used in lieu of the web application until this project is further along in development [(see more)](https://github.com/openeew/openeew-dashboard/tree/master/grafana)

## Quick start

**Install dependencies for both the mock API and application**

```bash
# setup scripts are located in /web
cd web

# this might take a few minutes
npm run setup
```

**Start the mock API and application concurrently**


```bash
# From the /web directory
npm start
```

**Start developing!**

The application should be running on http://localhost:3000.

The mock API should be running on http://localhost:4000.

## Future Plans
It is planned to expand this application so that in future, it will allow for the following:
- Automated user authentication through OAuth2 or similar
- Ability to connect to your sensor device, or the global OpenEEW network of devices
- Ability to configure your device (sample rate, device ID) and also query statistics (connectivity, signal quality)
- Ability to see historic data from your device and run simulations with detection system
- Ability to visualize sensor accelerations for each axis
- Ability to see sensor(s) on map

## Authors
- [Grillo](https://grillo.io)
- [Ryan Kelley](https://github.com/rdkelley)
___

Enjoy!  Give us [feedback](https://github.com/openeew/openeew-dashboard/issues) if you have suggestions on how to improve this information.

## License

This information is licensed under the Apache Software License, Version 2.  Separate third party code objects invoked within this code pattern are licensed by their respective providers pursuant to their own separate licenses. Contributions are subject to the [Developer Certificate of Origin, Version 1.1 (DCO)](https://developercertificate.org/) and the [Apache Software License, Version 2](http://www.apache.org/licenses/LICENSE-2.0.txt).