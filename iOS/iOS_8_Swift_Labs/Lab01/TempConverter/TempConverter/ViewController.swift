//
//  ViewController.swift
//  TempConverter
//
//  Created by Shaunak Vairagare on 3/8/15.
//  Copyright (c) 2015 Classroom. All rights reserved.
//

import UIKit
import CoreLocation

class ViewController: UIViewController, CLLocationManagerDelegate {
    
    var locationManager: CLLocationManager!
    var startLocation: CLLocation?
    
    
    @IBOutlet weak var celsius: UITextField!
    @IBOutlet weak var fahrenheit: UITextField!
    @IBOutlet weak var kelvin: UITextField!
    
    @IBOutlet weak var coord: UILabel!
    @IBOutlet weak var altitude: UILabel!
    @IBOutlet weak var accuracy: UILabel!
    
    var conv : MyConverter!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        conv = MyConverter()
        
        locationManager = CLLocationManager()
        locationManager.desiredAccuracy = kCLLocationAccuracyBest
        locationManager.delegate = self
        locationManager.requestWhenInUseAuthorization()
        locationManager.startUpdatingLocation()
        startLocation = nil
    }
    
    func locationManager(manager: CLLocationManager!, didUpdateLocations locations: [AnyObject]!) {
        let loc: CLLocation = locations.last as CLLocation
        println("\(loc.coordinate.latitude),\(loc.coordinate.longitude)");
        coord.text = "\(loc.coordinate.latitude),\(loc.coordinate.longitude)"
        altitude.text = "\(loc.altitude)"
        accuracy.text = "\(loc.horizontalAccuracy) (H), \(loc.verticalAccuracy) (V)"
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    @IBAction func onCelsiusChanged(sender: UITextField) {
        fahrenheit.text =  "\(conv.convertToFarenite((sender.text as NSString).doubleValue))"
        fahrenheit.reloadInputViews()

        kelvin.text = "\(conv.convertCelsiusToKelvin((sender.text as NSString).doubleValue))"
        kelvin.reloadInputViews();
        
    }
    
    @IBAction func onFareniteChanged(sender: UITextField) {
        celsius.text =  "\(conv.convertToCelsius((sender.text as NSString).doubleValue))"
        celsius.reloadInputViews()
        
        kelvin.text = "\(conv.convertCelsiusToKelvin((celsius.text as NSString).doubleValue))"
        kelvin.reloadInputViews();
    }
    
    @IBAction func onKelvinChanged(sender: UITextField) {
        celsius.text =  "\(conv.convertKelvinToCelsius((sender.text as NSString).doubleValue))"
        celsius.reloadInputViews()
        
        fahrenheit.text =  "\(conv.convertToFarenite((celsius.text as NSString).doubleValue))"
        fahrenheit.reloadInputViews()
        
    }
    
}

