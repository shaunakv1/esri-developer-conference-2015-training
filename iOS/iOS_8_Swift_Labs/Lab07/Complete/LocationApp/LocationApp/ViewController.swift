//
//  ViewController.swift
//  LocationApp
//
//  Copyright (c) 2014 Classroom. All rights reserved.
//

import UIKit
import CoreLocation

class ViewController: UIViewController, CLLocationManagerDelegate {

    var locationManager: CLLocationManager!
    var startLocation: CLLocation?
    
    @IBOutlet weak var latitudeLabel: UILabel!
    @IBOutlet weak var longitudeLabel: UILabel!
    @IBOutlet weak var horizAccLabel: UILabel!
    @IBOutlet weak var altitudeLabel: UILabel!
    @IBOutlet weak var vertAccLabel: UILabel!
    @IBOutlet weak var distanceLabel: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        locationManager = CLLocationManager()
        locationManager.desiredAccuracy = kCLLocationAccuracyBest
        locationManager.delegate = self
        locationManager.requestWhenInUseAuthorization()
        locationManager.startUpdatingLocation()
        
        startLocation = nil
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    @IBAction func resetAction(sender: AnyObject) {
        startLocation = nil
    }
    
    func locationManager(CLLocationManager!, didUpdateLocations locations: [AnyObject]!) {
        let mostRecentLocation: CLLocation = locations.last as CLLocation
        println((mostRecentLocation.coordinate.latitude));
        latitudeLabel.text = "\(mostRecentLocation.coordinate.latitude)"
        longitudeLabel.text = "\(mostRecentLocation.coordinate.longitude)"
        horizAccLabel.text = "\(mostRecentLocation.horizontalAccuracy)"
        altitudeLabel.text = "\(mostRecentLocation.altitude)"
        vertAccLabel.text = "\(mostRecentLocation.verticalAccuracy)"
        
        if startLocation == nil {
            startLocation = mostRecentLocation
        }
        let d = mostRecentLocation.distanceFromLocation(startLocation)
        distanceLabel.text = "\(d)"
    }

}
