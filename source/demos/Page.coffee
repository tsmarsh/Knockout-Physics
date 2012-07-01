class window.Page
    constructor: ->
        @demo = ko.observable (new AttractionDemo())
        @demo().init()

    update: =>
        requestAnimationFrame(@update)
        @demo().step()
        for particle in @demo().physics.particles
            particle.x( particle.pos.x )
            particle.y( particle.pos.y )